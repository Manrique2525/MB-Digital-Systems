<?php

use App\Enums\LeadSource;

it('has all required source values', function () {
    expect(LeadSource::cases())->toHaveCount(5);
    expect(LeadSource::ContactForm->value)->toBe('contact_form');
    expect(LeadSource::LeadMagnet->value)->toBe('lead_magnet');
});

it('returns correct label for each source', function () {
    expect(LeadSource::ContactForm->label())->toBe('Formulario de Contacto');
    expect(LeadSource::LeadMagnet->label())->toBe('Auditoría Gratuita');
    expect(LeadSource::WhatsApp->label())->toBe('WhatsApp Directo');
});
