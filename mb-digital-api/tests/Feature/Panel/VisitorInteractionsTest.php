<?php

use App\Filament\Resources\VisitorResource\Pages\ListVisitors;
use App\Filament\Resources\VisitorResource\Pages\ViewVisitor;
use App\Filament\Resources\VisitorResource\RelationManagers\InteractionsRelationManager;
use App\Filament\Widgets\TopInteractionsWidget;
use App\Models\LeadEvent;
use App\Models\User;
use App\Models\Visitor;
use Livewire\Livewire;

it('shows visitor interactions with friendly labels', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'interactions@test.com',
        'password' => 'password',
    ]);

    $visitor = Visitor::factory()->create();

    $event = LeadEvent::create([
        'visitor_id' => $visitor->id,
        'event_type' => 'wa_click',
        'section' => 'Hero',
        'created_at' => now(),
    ]);

    Livewire::actingAs($user)
        ->test(InteractionsRelationManager::class, [
            'ownerRecord' => $visitor,
            'pageClass' => ViewVisitor::class,
        ])
        ->assertSuccessful()
        ->assertCanSeeTableRecords([$event])
        ->assertTableColumnFormattedStateSet('event_type', 'Clic en WhatsApp', record: $event);
});

it('filters the interactions relation manager by type', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'interactions2@test.com',
        'password' => 'password',
    ]);

    $visitor = Visitor::factory()->create();

    $waEvent = LeadEvent::create([
        'visitor_id' => $visitor->id,
        'event_type' => 'wa_click',
        'section' => 'Hero',
        'created_at' => now(),
    ]);

    $pricingEvent = LeadEvent::create([
        'visitor_id' => $visitor->id,
        'event_type' => 'pricing_view',
        'section' => 'precios',
        'created_at' => now()->subMinute(),
    ]);

    Livewire::actingAs($user)
        ->test(InteractionsRelationManager::class, [
            'ownerRecord' => $visitor,
            'pageClass' => ViewVisitor::class,
        ])
        ->filterTable('event_type', 'pricing_view')
        ->assertCanSeeTableRecords([$pricingEvent])
        ->assertCanNotSeeTableRecords([$waEvent]);
});

it('filters the visitors list by interaction type', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'list-interactions@test.com',
        'password' => 'password',
    ]);

    $visitorWithWa = Visitor::factory()->create(['session_id' => 'list-wa']);
    $visitorWithout = Visitor::factory()->create(['session_id' => 'list-plain']);

    LeadEvent::create([
        'visitor_id' => $visitorWithWa->id,
        'event_type' => 'wa_click',
        'section' => 'Hero',
        'created_at' => now(),
    ]);

    Livewire::actingAs($user)
        ->test(ListVisitors::class)
        ->filterTable('interaction', 'wa_click')
        ->assertCanSeeTableRecords([$visitorWithWa])
        ->assertCanNotSeeTableRecords([$visitorWithout]);
});

it('shows the top interactions widget with aggregated counts', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'top-widget@test.com',
        'password' => 'password',
    ]);

    $visitor = Visitor::factory()->create();

    LeadEvent::create(['visitor_id' => $visitor->id, 'event_type' => 'wa_click', 'section' => 'Hero', 'created_at' => now()]);
    LeadEvent::create(['visitor_id' => $visitor->id, 'event_type' => 'wa_click', 'section' => 'Hero', 'created_at' => now()]);
    LeadEvent::create(['visitor_id' => $visitor->id, 'event_type' => 'pricing_view', 'section' => 'precios', 'created_at' => now()]);

    $widget = Livewire::actingAs($user)
        ->test(TopInteractionsWidget::class)
        ->assertSuccessful();

    $rows = collect($widget->instance()->getTable()->getRecords());

    $this->assertCount(2, $rows);
    $this->assertSame('wa_click', $rows->first()->event_type);
    $this->assertSame(2, (int) $rows->first()->total);
    $this->assertSame('pricing_view', $rows->last()->event_type);
});
