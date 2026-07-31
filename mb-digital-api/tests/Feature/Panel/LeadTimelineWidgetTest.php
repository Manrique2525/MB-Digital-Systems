<?php

use App\Filament\Resources\LeadResource\Widgets\LeadTimelineWidget;
use App\Models\Lead;
use App\Models\LeadNote;
use App\Models\LeadEvent;
use App\Models\Reminder;
use App\Models\Visitor;
use Livewire\Livewire;

it('renders the lead timeline with page views, events, notes and reminders', function () {
    $visitor = Visitor::factory()->create();

    $lead = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'source' => 'contact_form',
        'notes' => 'Nota interna del dueño',
    ]);

    LeadNote::create([
        'lead_id' => $lead->id,
        'note' => 'Cliente interesado en e-commerce',
        'created_by' => 'Admin',
    ]);

    Reminder::create([
        'lead_id' => $lead->id,
        'title' => 'Llamar mañana',
        'due_at' => now()->addDay(),
        'completed' => false,
    ]);

    $widget = Livewire::test(LeadTimelineWidget::class, ['record' => $lead])
        ->assertSuccessful();

    $entries = $widget->instance()->getTimeline();

    $titles = collect($entries)->pluck('title');
    $this->assertTrue($titles->contains('Nota: Cliente interesado en e-commerce'));
    $this->assertTrue($titles->contains('Recordatorio: Llamar mañana'));
    $this->assertTrue($titles->contains('Se convirtió en lead'));
    $this->assertCount(3, $entries);
});

it('shows the plan in whatsapp click event descriptions', function () {
    $visitor = Visitor::factory()->create();

    $lead = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => 'ecommerce',
        'notes' => null,
    ]);

    LeadEvent::create([
        'visitor_id' => $visitor->id,
        'event_type' => 'wa_click',
        'section' => 'precios',
        'meta' => ['plan' => 'E-commerce'],
        'created_at' => now(),
    ]);

    $widget = Livewire::test(LeadTimelineWidget::class, ['record' => $lead])
        ->assertSuccessful();

    $entries = $widget->instance()->getTimeline();

    $waClick = collect($entries)->firstWhere('title', 'Clic en WhatsApp');
    $this->assertNotNull($waClick);
    $this->assertSame('E-commerce — Precios', $waClick['description']);
});

it('renders the lead timeline for a lead without visitor and without notes', function () {
    $lead = Lead::factory()->create([
        'visitor_id' => null,
        'notes' => null,
    ]);

    $widget = Livewire::test(LeadTimelineWidget::class, ['record' => $lead])
        ->assertSuccessful();

    $entries = $widget->instance()->getTimeline();

    $this->assertCount(1, $entries);
    $this->assertSame('Lead creado manualmente', $entries[0]['title']);
});
