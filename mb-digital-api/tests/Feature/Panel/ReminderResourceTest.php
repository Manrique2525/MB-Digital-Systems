<?php

use App\Enums\LeadStatus;
use App\Filament\Resources\ReminderResource\Pages\ListReminders;
use App\Models\Lead;
use App\Models\Reminder;
use App\Models\User;
use Livewire\Livewire;

it('lists reminders with overdue and pending state', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'reminders@test.com',
        'password' => 'password',
    ]);

    $lead = Lead::factory()->create(['status' => LeadStatus::New]);

    Reminder::create([
        'lead_id' => $lead->id,
        'title' => 'Llamar a Juan',
        'due_at' => now()->subHour(),
        'completed' => false,
    ]);

    Reminder::create([
        'lead_id' => $lead->id,
        'title' => 'Enviar cotización',
        'due_at' => now()->addDay(),
        'completed' => true,
    ]);

    Livewire::actingAs($user)
        ->test(ListReminders::class)
        ->assertSuccessful()
        ->assertCanSeeTableRecords(Reminder::all());
});

it('can mark a reminder as completed', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'reminders2@test.com',
        'password' => 'password',
    ]);

    $lead = Lead::factory()->create();
    $reminder = Reminder::create([
        'lead_id' => $lead->id,
        'title' => 'Seguimiento',
        'due_at' => now()->addHours(2),
        'completed' => false,
    ]);

    Livewire::actingAs($user)
        ->test(ListReminders::class)
        ->callTableAction('mark_completed', $reminder)
        ->assertHasNoActionErrors();

    $this->assertTrue($reminder->fresh()->completed);
    $this->assertNotNull($reminder->fresh()->completed_at);
});
