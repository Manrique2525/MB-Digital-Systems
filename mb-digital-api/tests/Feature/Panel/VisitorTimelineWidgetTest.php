<?php

use App\Filament\Resources\VisitorResource\Pages\ViewVisitor;
use App\Filament\Resources\VisitorResource\Widgets\VisitorTimelineWidget;
use App\Models\LeadEvent;
use App\Models\PageView;
use App\Models\User;
use App\Models\Visitor;
use Livewire\Livewire;

it('shows the visitor timeline with page views and events', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'visitor-widget@test.com',
        'password' => 'password',
    ]);

    $visitor = Visitor::factory()->create();

    PageView::create([
        'visitor_id' => $visitor->id,
        'url' => '/servicios',
        'title' => 'Servicios',
        'created_at' => now()->subMinute(),
    ]);

    LeadEvent::create([
        'visitor_id' => $visitor->id,
        'event_type' => 'wa_click',
        'section' => 'Hero',
        'created_at' => now(),
    ]);

    $component = Livewire::actingAs($user)
        ->test(ViewVisitor::class, ['record' => $visitor->getRouteKey()]);

    $component->assertSuccessful();

    $widget = Livewire::test(VisitorTimelineWidget::class, ['record' => $visitor])
        ->assertSuccessful();

    $entries = $widget->instance()->getTimeline();
    $this->assertCount(2, $entries);
    $this->assertStringContainsString('Servicios', $entries[0]['description']);
    $this->assertSame('Clic en WhatsApp', $entries[1]['title']);
});

it('shows empty state for visitor without activity', function () {
    $visitor = Visitor::factory()->create();

    $widget = Livewire::test(VisitorTimelineWidget::class, ['record' => $visitor])
        ->assertSuccessful();

    $this->assertCount(0, $widget->instance()->getTimeline());
});
