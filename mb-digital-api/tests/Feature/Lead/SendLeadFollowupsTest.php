<?php

use App\Console\Commands\SendLeadFollowups;
use App\Enums\LeadStatus;
use App\Mail\LeadFollowupMail;
use App\Models\Lead;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

it('sends followup emails to stale leads and marks followup_sent_at', function () {
    Mail::fake();

    $stale = Lead::factory()->create([
        'status' => LeadStatus::New,
        'email' => 'stale@test.com',
        'created_at' => now()->subHours(25),
    ]);

    $recent = Lead::factory()->create([
        'status' => LeadStatus::New,
        'email' => 'recent@test.com',
        'created_at' => now()->subHours(2),
    ]);

    expect(Artisan::call(SendLeadFollowups::class))->toBe(0);

    Mail::assertSent(LeadFollowupMail::class, fn ($mail) => $mail->hasTo('stale@test.com'));
    Mail::assertNotSent(LeadFollowupMail::class, fn ($mail) => $mail->hasTo('recent@test.com'));

    $this->assertNotNull($stale->fresh()->followup_sent_at);
    $this->assertNull($recent->fresh()->followup_sent_at);
});

it('does not send followups twice for the same lead', function () {
    Mail::fake();

    Lead::factory()->create([
        'status' => LeadStatus::Contacted,
        'email' => 'twice@test.com',
        'created_at' => now()->subHours(25),
    ]);

    expect(Artisan::call(SendLeadFollowups::class))->toBe(0);
    expect(Artisan::call(SendLeadFollowups::class))->toBe(0);

    Mail::assertSent(LeadFollowupMail::class, 1);
});

it('ignores leads without email and won or lost status', function () {
    Mail::fake();

    Lead::factory()->create([
        'status' => LeadStatus::New,
        'email' => null,
        'created_at' => now()->subHours(25),
    ]);

    Lead::factory()->create([
        'status' => LeadStatus::Won,
        'email' => 'won@test.com',
        'created_at' => now()->subHours(25),
    ]);

    expect(Artisan::call(SendLeadFollowups::class))->toBe(0);

    Mail::assertNothingSent();
});
