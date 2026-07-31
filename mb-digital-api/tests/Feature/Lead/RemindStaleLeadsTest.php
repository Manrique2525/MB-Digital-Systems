<?php

use App\Console\Commands\RemindStaleLeads;
use App\Enums\LeadStatus;
use App\Models\Lead;
use Illuminate\Support\Facades\Artisan;

it('creates overdue reminders for stale new leads', function () {
    $stale = Lead::factory()->create([
        'status' => LeadStatus::New,
        'created_at' => now()->subHours(50),
    ]);

    $recent = Lead::factory()->create([
        'status' => LeadStatus::New,
        'created_at' => now()->subHours(2),
    ]);

    expect(Artisan::call(RemindStaleLeads::class))->toBe(0);

    $this->assertDatabaseHas('reminders', [
        'lead_id' => $stale->id,
        'completed' => false,
    ]);

    $this->assertDatabaseHas('lead_notes', [
        'lead_id' => $stale->id,
        'created_by' => 'Sistema',
    ]);

    $this->assertDatabaseCount('reminders', 1);
    $this->assertSame(LeadStatus::New, $stale->fresh()->status);
    $this->assertSame(LeadStatus::New, $recent->fresh()->status);
});

it('does not create duplicate reminders for the same lead', function () {
    $stale = Lead::factory()->create([
        'status' => LeadStatus::New,
        'created_at' => now()->subHours(50),
    ]);

    expect(Artisan::call(RemindStaleLeads::class))->toBe(0);
    expect(Artisan::call(RemindStaleLeads::class))->toBe(0);

    $this->assertDatabaseCount('reminders', 1);
});

it('ignores leads that are not new', function () {
    Lead::factory()->create([
        'status' => LeadStatus::Contacted,
        'created_at' => now()->subHours(50),
    ]);

    expect(Artisan::call(RemindStaleLeads::class))->toBe(0);

    $this->assertDatabaseCount('reminders', 0);
});
