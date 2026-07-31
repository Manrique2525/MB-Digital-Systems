<?php

use App\Enums\LeadStatus;
use App\Mail\LeadAutoresponseMail;
use App\Mail\LeadNotificationMail;
use App\Models\Lead;
use App\Models\Visitor;
use Illuminate\Support\Facades\Mail;

it('can store a lead from contact form', function () {
    Mail::fake();

    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Juan Pérez',
        'email' => 'juan@example.com',
        'phone' => '9931234567',
        'message' => 'Quiero una página web para mi negocio',
        'source' => 'contact_form',
    ]);

    $response->assertCreated()
        ->assertJson([
            'success' => true,
        ])
        ->assertJsonStructure([
            'success',
            'data' => ['id', 'name', 'status', 'source', 'created_at'],
        ]);

    $this->assertDatabaseHas('leads', [
        'name' => 'Juan Pérez',
        'email' => 'juan@example.com',
        'source' => 'contact_form',
        'status' => 'new',
    ]);

    Mail::assertQueued(LeadNotificationMail::class);
});

it('validates required fields for lead creation', function () {
    $response = $this->postJson('/api/v1/leads', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name', 'email', 'message', 'source']);
});

it('correlates lead to existing visitor by session_id', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();

    $response = $this->postJson('/api/v1/leads', [
        'session_id' => $visitor->session_id,
        'name' => 'María García',
        'email' => 'maria@example.com',
        'message' => 'Me interesa el plan E-commerce',
        'source' => 'lead_magnet',
    ]);

    $response->assertCreated();

    $this->assertDatabaseHas('leads', [
        'visitor_id' => $visitor->id,
        'email' => 'maria@example.com',
        'source' => 'lead_magnet',
    ]);
});

it('stores lead without visitor when no session_id', function () {
    Mail::fake();

    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Pedro López',
        'email' => 'pedro@example.com',
        'message' => 'Cotización por favor',
        'source' => 'contact_form',
    ]);

    $response->assertCreated();

    $this->assertDatabaseHas('leads', [
        'name' => 'Pedro López',
        'visitor_id' => null,
    ]);
});

it('sends autoresponse email when lead has email', function () {
    Mail::fake();

    $this->postJson('/api/v1/leads', [
        'name' => 'Ana Torres',
        'email' => 'ana@example.com',
        'message' => 'Información de servicios',
        'source' => 'lead_magnet',
    ]);

    Mail::assertQueued(LeadAutoresponseMail::class);
});

it('requires an email to create a lead', function () {
    Mail::fake();

    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Carlos Ruiz',
        'phone' => '9931112233',
        'message' => 'Llamenme por favor',
        'source' => 'contact_form',
    ]);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['email']);

    Mail::assertNotQueued(LeadAutoresponseMail::class);
});

it('can store a lead with a service interest', function () {
    Mail::fake();

    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Laura Díaz',
        'email' => 'laura@example.com',
        'phone' => '9931234567',
        'message' => 'Necesito una tienda para mi negocio',
        'service' => 'ecommerce',
        'source' => 'contact_form',
    ]);

    $response->assertCreated();

    $this->assertDatabaseHas('leads', [
        'name' => 'Laura Díaz',
        'service' => 'ecommerce',
        'source' => 'contact_form',
    ]);
});

it('rejects an invalid service value', function () {
    Mail::fake();

    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Test',
        'email' => 'test@example.com',
        'message' => 'Test message',
        'service' => 'servicio_invalido',
        'source' => 'contact_form',
    ]);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['service']);
});

it('rejects invalid lead source', function () {
    $response = $this->postJson('/api/v1/leads', [
        'name' => 'Test',
        'email' => 'test@example.com',
        'message' => 'Test message',
        'source' => 'invalid_source',
    ]);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['source']);
});

it('upgrades existing lead to qualified when visitor resubmits the form', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();
    $existing = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'status' => LeadStatus::New,
    ]);

    $response = $this->postJson('/api/v1/leads', [
        'session_id' => $visitor->session_id,
        'name' => 'María García',
        'email' => 'maria@example.com',
        'phone' => '9931112233',
        'message' => 'Volvió a escribir, ya decidió cotizar',
        'source' => 'contact_form',
    ]);

    $response->assertCreated()
        ->assertJsonPath('data.id', $existing->id);

    $this->assertDatabaseHas('leads', [
        'id' => $existing->id,
        'status' => LeadStatus::Qualified->value,
        'phone' => '9931112233',
        'message' => 'Volvió a escribir, ya decidió cotizar',
    ]);

    $this->assertDatabaseCount('leads', 1);

    $this->assertDatabaseHas('lead_notes', [
        'lead_id' => $existing->id,
        'created_by' => 'Sistema',
    ]);

    Mail::assertNotQueued(LeadNotificationMail::class);
});

it('does not downgrade a qualified lead when visitor resubmits', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();
    $existing = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'status' => LeadStatus::Qualified,
    ]);

    $this->postJson('/api/v1/leads', [
        'session_id' => $visitor->session_id,
        'name' => 'María García',
        'email' => 'maria@example.com',
        'message' => 'Nuevo mensaje',
        'source' => 'contact_form',
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'id' => $existing->id,
        'status' => LeadStatus::Qualified->value,
    ]);

    $this->assertDatabaseCount('leads', 1);
});

it('records a note when a lead changes its service interest on resubmit', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();
    $existing = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => 'sistema_a_medida',
        'status' => LeadStatus::New,
    ]);

    $response = $this->postJson('/api/v1/leads', [
        'session_id' => $visitor->session_id,
        'name' => 'María García',
        'email' => 'maria@example.com',
        'phone' => '9931112233',
        'message' => 'Finalmente quiero una página web',
        'service' => 'pagina_web',
        'source' => 'contact_form',
    ]);

    $response->assertCreated()
        ->assertJsonPath('data.id', $existing->id);

    $this->assertDatabaseHas('leads', [
        'id' => $existing->id,
        'service' => 'pagina_web',
    ]);

    $this->assertDatabaseHas('lead_notes', [
        'lead_id' => $existing->id,
        'note' => 'Cambió su interés: Sistema a Medida → Página Web',
        'created_by' => 'Sistema',
    ]);

    Mail::assertNotQueued(LeadNotificationMail::class);
});

it('does not record a service-change note when the service stays the same', function () {
    Mail::fake();

    $visitor = Visitor::factory()->create();
    $existing = Lead::factory()->create([
        'visitor_id' => $visitor->id,
        'source' => 'whatsapp',
        'service' => 'ecommerce',
        'status' => LeadStatus::New,
    ]);

    $this->postJson('/api/v1/leads', [
        'session_id' => $visitor->session_id,
        'name' => 'María García',
        'email' => 'maria@example.com',
        'message' => 'Confirmo mi tienda online',
        'service' => 'ecommerce',
        'source' => 'contact_form',
    ])->assertCreated();

    $this->assertDatabaseHas('leads', [
        'id' => $existing->id,
        'service' => 'ecommerce',
    ]);

    $this->assertDatabaseCount('lead_notes', 1);
});
