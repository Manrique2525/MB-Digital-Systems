<?php

use App\Models\Lead;
use App\Models\User;
use App\Models\Visitor;

it('renders panel login', function () {
    $this->get('/admin/login')->assertSuccessful();
});

it('renders leads and visitors pages for admin', function () {
    $user = User::create([
        'name' => 'Test Admin',
        'email' => 'smoke@test.com',
        'password' => 'password',
    ]);

    Visitor::factory()->count(3)->create();
    Lead::factory()->count(3)->create();

    $this->actingAs($user)
        ->get('/admin')
        ->assertSuccessful();

    $this->actingAs($user)
        ->get('/admin/leads')
        ->assertSuccessful();

    $this->actingAs($user)
        ->get('/admin/visitors')
        ->assertSuccessful();
});
