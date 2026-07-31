<?php

use App\Filament\Resources\LeadResource\Pages\ListLeads;
use App\Filament\Resources\VisitorResource\Pages\ListVisitors;
use App\Models\Lead;
use App\Models\User;
use App\Models\Visitor;
use Livewire\Livewire;

it('exports leads to csv', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'csv-leads@test.com',
        'password' => 'password',
    ]);

    Lead::factory()->create(['name' => 'Juan Pérez', 'email' => 'juan@test.com']);

    Livewire::actingAs($user)
        ->test(ListLeads::class)
        ->callAction('export_csv')
        ->assertHasNoActionErrors();

    $this->assertTrue(true);
});

it('exports visitors to csv', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'csv-visitors@test.com',
        'password' => 'password',
    ]);

    Visitor::factory()->create([
        'session_id' => 'csv-session',
        'first_page' => '/servicios',
    ]);

    Livewire::actingAs($user)
        ->test(ListVisitors::class)
        ->callAction('export_csv')
        ->assertHasNoActionErrors();

    $this->assertTrue(true);
});
