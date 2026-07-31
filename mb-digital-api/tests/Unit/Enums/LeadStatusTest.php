<?php

use App\Enums\LeadStatus;

it('has all required status values', function () {
    expect(LeadStatus::cases())->toHaveCount(6);
    expect(LeadStatus::New->value)->toBe('new');
    expect(LeadStatus::Won->value)->toBe('won');
    expect(LeadStatus::Lost->value)->toBe('lost');
});

it('returns correct label for each status', function () {
    expect(LeadStatus::New->label())->toBe('Nuevo');
    expect(LeadStatus::Contacted->label())->toBe('Contactado');
    expect(LeadStatus::Qualified->label())->toBe('Calificado');
    expect(LeadStatus::Proposal->label())->toBe('Cotización');
    expect(LeadStatus::Won->label())->toBe('Ganado');
    expect(LeadStatus::Lost->label())->toBe('Perdido');
});

it('returns correct color for each status', function () {
    expect(LeadStatus::New->color())->toBe('#3B82F6');
    expect(LeadStatus::Won->color())->toBe('#10B981');
    expect(LeadStatus::Lost->color())->toBe('#EF4444');
});

it('can be used as backed enum with database', function () {
    $status = LeadStatus::New;
    expect($status->value)->toBeString();
    expect(LeadStatus::from($status->value))->toBe($status);
});
