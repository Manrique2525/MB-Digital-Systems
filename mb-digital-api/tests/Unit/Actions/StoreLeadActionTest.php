<?php

use App\Actions\Lead\StoreLeadAction;
use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use App\Events\LeadCreated;
use App\Models\Visitor;
use Illuminate\Support\Facades\Event;

it('creates a lead with all required data', function () {
    Event::fake();

    $action = app(StoreLeadAction::class);

    $lead = ($action)(
        name: 'Test User',
        email: 'test@example.com',
        phone: '9931234567',
        message: 'Test message',
        source: LeadSource::ContactForm,
    );

    expect($lead->name)->toBe('Test User');
    expect($lead->email)->toBe('test@example.com');
    expect($lead->phone)->toBe('9931234567');
    expect($lead->message)->toBe('Test message');
    expect($lead->source)->toBe(LeadSource::ContactForm);
    expect($lead->status)->toBe(LeadStatus::New);
});

it('dispatches LeadCreated event', function () {
    Event::fake();

    $action = app(StoreLeadAction::class);

    ($action)(
        name: 'Test',
        source: LeadSource::ContactForm,
        message: 'Test',
    );

    Event::assertDispatched(LeadCreated::class);
});

it('associates lead with visitor when session_id matches', function () {
    Event::fake();

    $visitor = Visitor::factory()->create();
    $action = app(StoreLeadAction::class);

    $lead = ($action)(
        name: 'Linked User',
        email: 'linked@example.com',
        message: 'Linked lead',
        source: LeadSource::LeadMagnet,
        sessionId: $visitor->session_id,
    );

    expect($lead->visitor_id)->toBe($visitor->id);
});

it('creates lead with a service interest', function () {
    Event::fake();

    $lead = (app(StoreLeadAction::class))(
        name: 'Test User',
        message: 'Quiero una tienda online',
        source: LeadSource::ContactForm,
        service: 'ecommerce',
    );

    expect($lead->service)->toBe(LeadService::Ecommerce);
});

it('creates lead without visitor when no session_id', function () {
    Event::fake();

    $action = app(StoreLeadAction::class);

    $lead = ($action)(
        name: 'Standalone',
        source: LeadSource::ContactForm,
        message: 'No visitor',
    );

    expect($lead->visitor_id)->toBeNull();
});
