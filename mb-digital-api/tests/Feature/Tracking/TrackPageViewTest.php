<?php

use App\Models\Visitor;
use Illuminate\Support\Str;

it('can track a page view', function () {
    $sessionId = (string) Str::uuid();

    $response = $this->postJson('/api/v1/track/page', [
        'session_id' => $sessionId,
        'url' => '/planes',
        'title' => 'Planes y Precios',
        'referrer' => 'https://google.com',
    ]);

    $response->assertCreated()
        ->assertJson(['success' => true]);

    $this->assertDatabaseCount('page_views', 1);
    $this->assertDatabaseHas('visitors', [
        'session_id' => $sessionId,
        'first_page' => '/planes',
    ]);
});

it('creates visitor on first page view', function () {
    $sessionId = (string) Str::uuid();

    $this->postJson('/api/v1/track/page', [
        'session_id' => $sessionId,
        'url' => '/',
        'title' => 'Inicio',
    ]);

    $this->assertDatabaseHas('visitors', [
        'session_id' => $sessionId,
        'page_views_count' => 1,
    ]);
});

it('increments page_views_count for returning visitor', function () {
    $visitor = Visitor::factory()->create(['page_views_count' => 1]);

    $this->postJson('/api/v1/track/page', [
        'session_id' => $visitor->session_id,
        'url' => '/servicios',
        'title' => 'Servicios',
    ]);

    $this->assertEquals(2, $visitor->fresh()->page_views_count);
});

it('validates required fields for page tracking', function () {
    $response = $this->postJson('/api/v1/track/page', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['session_id', 'url']);
});
