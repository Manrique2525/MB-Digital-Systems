<?php

use App\Support\InteractionFormatter;

it('returns the friendly label for a known event type', function () {
    expect(InteractionFormatter::label('wa_click'))->toBe('Clic en WhatsApp');
});

it('falls back to the raw value for unknown event types', function () {
    expect(InteractionFormatter::label('custom_event'))->toBe('custom_event');
});

it('returns an icon for every known event type', function () {
    foreach (App\Enums\EventType::cases() as $case) {
        expect(InteractionFormatter::icon($case->value))->not->toBeEmpty();
    }
});

it('maps known sections to spanish names', function () {
    expect(InteractionFormatter::section('servicios'))->toBe('Servicios');
    expect(InteractionFormatter::section('whatsapp-float'))->toBe('WhatsApp flotante');
});

it('falls back to the raw section for unknown sections', function () {
    expect(InteractionFormatter::section('mi-seccion'))->toBe('mi-seccion');
});

it('returns null for empty sections', function () {
    expect(InteractionFormatter::section(null))->toBeNull();
    expect(InteractionFormatter::section(''))->toBeNull();
});

it('builds a description from the section', function () {
    expect(InteractionFormatter::description('precios'))->toBe('Precios');
    expect(InteractionFormatter::description(null))->toBe('Sin sección específica');
});
