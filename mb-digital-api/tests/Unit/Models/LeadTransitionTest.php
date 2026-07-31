<?php

use App\Enums\LeadStatus;
use App\Models\Lead;

it('transitions status and records the timestamp for contacted', function () {
    $lead = Lead::factory()->create([
        'status' => LeadStatus::New,
        'contacted_at' => null,
    ]);

    $lead->transitionStatus(LeadStatus::Contacted, 'Probando transición');

    $lead->refresh();

    expect($lead->status)->toBe(LeadStatus::Contacted)
        ->and($lead->contacted_at)->not->toBeNull()
        ->and($lead->notes()->count())->toBe(1)
        ->and($lead->notes()->first()->created_by)->toBe('Sistema');
});

it('keeps the original contacted_at if already set', function () {
    $contactedAt = now()->subDay();
    $lead = Lead::factory()->create([
        'status' => LeadStatus::New,
        'contacted_at' => $contactedAt,
    ]);

    $lead->transitionStatus(LeadStatus::Contacted);

    expect($lead->fresh()->contacted_at->toDateTimeString())->toBe($contactedAt->toDateTimeString());
});

it('does not write a note when none is provided', function () {
    $lead = Lead::factory()->create();

    $lead->transitionStatus(LeadStatus::Won);

    expect($lead->fresh()->status)->toBe(LeadStatus::Won)
        ->and($lead->notes()->count())->toBe(0);
});
