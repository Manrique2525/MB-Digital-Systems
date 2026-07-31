<?php

use App\Filament\Resources\LeadResource\Pages\ViewLead;
use App\Models\Lead;
use App\Models\User;
use Livewire\Livewire;

it('can add a manual note to a lead', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'notes@test.com',
        'password' => 'password',
    ]);

    $lead = Lead::factory()->create();

    Livewire::actingAs($user)
        ->test(ViewLead::class, ['record' => $lead->getRouteKey()])
        ->callAction('add_note', [
            'note' => 'Llamó el cliente, quiere una página de ecommerce',
        ])
        ->assertHasNoFormErrors();

    $this->assertDatabaseHas('lead_notes', [
        'lead_id' => $lead->id,
        'note' => 'Llamó el cliente, quiere una página de ecommerce',
        'created_by' => $user->name,
    ]);
});
