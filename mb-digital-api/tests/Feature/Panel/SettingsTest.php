<?php

use App\Filament\Pages\Settings;
use App\Models\Setting;
use App\Models\User;
use Livewire\Livewire;

it('stores and retrieves settings by key', function () {
    Setting::set('whatsapp_number', '529931782620');
    Setting::set('followup_hours', 12);

    $this->assertSame('529931782620', Setting::get('whatsapp_number'));
    $this->assertSame(12, Setting::int('followup_hours', 24));
    $this->assertSame('fallback', Setting::get('unknown_key', 'fallback'));
    $this->assertSame(48, Setting::int('unknown_int', 48));
});

it('upserts the same key instead of duplicating', function () {
    Setting::set('admin_email', 'a@test.com');
    Setting::set('admin_email', 'b@test.com');

    $this->assertSame('b@test.com', Setting::string('admin_email', ''));
    $this->assertDatabaseCount('settings', 1);
});

it('renders the settings page prefilled from settings', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'settings@test.com',
        'password' => 'password',
    ]);

    Setting::set('followup_hours', 6);

    $component = Livewire::actingAs($user)
        ->test(Settings::class)
        ->assertSuccessful();

    $state = $component->get('data');
    $this->assertSame(6, (int) $state['followup_hours']);
});

it('saves settings from the form', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'settings2@test.com',
        'password' => 'password',
    ]);

    Livewire::actingAs($user)
        ->test(Settings::class)
        ->fillForm([
            'followup_hours' => 10,
            'stale_hours' => 30,
            'cleanup_days' => 60,
            'whatsapp_number' => '5215551234567',
            'admin_email' => 'ventas@test.com',
        ])
        ->call('save');

    $this->assertSame(10, Setting::int('followup_hours', 0));
    $this->assertSame(30, Setting::int('stale_hours', 0));
    $this->assertSame(60, Setting::int('cleanup_days', 0));
    $this->assertSame('5215551234567', Setting::get('whatsapp_number'));
    $this->assertSame('ventas@test.com', Setting::get('admin_email'));
});
