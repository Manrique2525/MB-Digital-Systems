<?php

use App\Enums\EventType;
use App\Enums\LeadStatus;
use App\Models\Lead;
use App\Models\Visitor;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

it('can track a custom event', function () {
    $sessionId = (string) Str::uuid();

    $response = $this->postJson('/api/v1/track/event', [
        'session_id' => $sessionId,
        'event_type' => 'wa_click',
        'section' => 'hero',
        'meta' => ['button_text' => 'Cotización gratis'],
    ]);

    $response->assertCreated()
        ->assertJson(['success' => true]);

    $this->assertDatabaseHas('lead_events', [
        'event_type' => 'wa_click',
        'section' => 'hero',
    ]);
});

it('validates event_type against enum', function () {
    $response = $this->postJson('/api/v1/track/event', [
        'session_id' => 'test-123',
        'event_type' => 'invalid_event_type',
    ]);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['event_type']);
});

it('tracks multiple event types', function () {
    $sessionId = (string) Str::uuid();

    foreach (EventType::cases() as $eventType) {
        $this->postJson('/api/v1/track/event', [
            'session_id' => $sessionId,
            'event_type' => $eventType->value,
            'section' => 'test',
        ])->assertCreated();
    }

    $this->assertDatabaseCount('lead_events', count(EventType::cases()));
});

it('auto-marks a new lead as contacted when they click whatsapp', function () {
    $visitor = Visitor::factory()->create();
    $lead = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'status' => LeadStatus::New,
    ]);

    $this->postJson('/api/v1/track/event', [
        'session_id' => $visitor->session_id,
        'event_type' => 'wa_click',
        'section' => 'whatsapp-float',
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'id' => $lead->id,
        'status' => LeadStatus::Contacted->value,
    ]);

    $this->assertNotNull($lead->fresh()->contacted_at);

    $this->assertDatabaseHas('lead_notes', [
        'lead_id' => $lead->id,
        'created_by' => 'Sistema',
    ]);
});

it('does not downgrade a won or lost lead on whatsapp click', function () {
    foreach ([LeadStatus::Won, LeadStatus::Lost] as $status) {
        $visitor = Visitor::factory()->create();
        $lead = Lead::factory()->create([
            'visitor_id' => $visitor->id,
            'status' => $status,
        ]);

        $this->postJson('/api/v1/track/event', [
            'session_id' => $visitor->session_id,
            'event_type' => 'wa_click',
            'section' => 'whatsapp-float',
        ])->assertCreated();

        $this->assertDatabaseHas('leads', [
            'id' => $lead->id,
            'status' => $status->value,
        ]);
    }
});

it('does not change status for non-whatsapp events', function () {
    $visitor = Visitor::factory()->create();
    $lead = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'status' => LeadStatus::New,
    ]);

    $this->postJson('/api/v1/track/event', [
        'session_id' => $visitor->session_id,
        'event_type' => 'pricing_view',
        'section' => 'precios',
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'id' => $lead->id,
        'status' => LeadStatus::New->value,
    ]);
});

it('creates a lead when a visitor clicks whatsapp for the first time', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();

    $this->postJson('/api/v1/track/event', [
        'session_id' => $visitor->session_id,
        'event_type' => 'wa_click',
        'section' => 'precios',
        'meta' => ['plan' => 'E-commerce'],
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => 'ecommerce',
        'status' => LeadStatus::New->value,
        'message' => 'Clic en WhatsApp (E-commerce) desde la sección: precios',
    ]);
});

it('maps the plan to a service interest on whatsapp click', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();

    $this->postJson('/api/v1/track/event', [
        'session_id' => $visitor->session_id,
        'event_type' => 'wa_click',
        'section' => 'servicios',
        'meta' => ['plan' => 'Sistema a Medida'],
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => 'sistema_a_medida',
    ]);
});

it('leaves the service null when the plan does not map to a service', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();

    $this->postJson('/api/v1/track/event', [
        'session_id' => $visitor->session_id,
        'event_type' => 'wa_click',
        'section' => 'pricing',
        'meta' => ['plan' => 'Proyecto Especial'],
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => null,
        'message' => 'Clic en WhatsApp (Proyecto Especial) desde la sección: pricing',
    ]);
});

it('does not create a lead for non-whatsapp events', function () {
    $visitor = Visitor::factory()->create();

    foreach (['pricing_view', 'form_start', 'nav_click'] as $eventType) {
        $this->postJson('/api/v1/track/event', [
            'session_id' => $visitor->session_id,
            'event_type' => $eventType,
            'section' => 'test',
        ])->assertCreated();
    }

    $this->assertDatabaseCount('leads', 0);
});

it('does not create duplicate leads on repeated whatsapp clicks', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();

    foreach (['hero', 'precios'] as $section) {
        $this->postJson('/api/v1/track/event', [
            'session_id' => $visitor->session_id,
            'event_type' => 'wa_click',
            'section' => $section,
        ])->assertCreated();
    }

    $this->assertDatabaseCount('leads', 1);
    $this->assertDatabaseHas('leads', [
        'visitor_id' => $visitor->id,
        'status' => LeadStatus::Contacted->value,
    ]);
});
