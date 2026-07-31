<?php

use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Filament\Pages\Dashboard;
use App\Filament\Resources\LeadResource\Widgets\LeadsServiceChartWidget;
use App\Filament\Resources\LeadResource\Widgets\LeadsSourceChartWidget;
use App\Filament\Resources\LeadResource\Widgets\LeadsTrendChartWidget;
use App\Filament\Widgets\StatsOverviewWidget;
use App\Filament\Widgets\TopInteractionsWidget;
use App\Models\Lead;
use App\Models\User;
use Livewire\Livewire;

it('renders the custom dashboard with stats and charts', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'dashboard@test.com',
        'password' => 'password',
    ]);

    Lead::factory()->count(3)->create([
        'source' => LeadSource::ContactForm,
        'created_at' => now(),
    ]);
    Lead::factory()->create([
        'source' => LeadSource::WhatsApp,
        'created_at' => now()->subDays(2),
    ]);

    Livewire::actingAs($user)
        ->test(Dashboard::class)
        ->assertSuccessful();

    $widgets = app(Dashboard::class)->getWidgets();
    $this->assertContains(StatsOverviewWidget::class, $widgets);
    $this->assertContains(LeadsTrendChartWidget::class, $widgets);
    $this->assertContains(LeadsSourceChartWidget::class, $widgets);
    $this->assertContains(LeadsServiceChartWidget::class, $widgets);
    $this->assertContains(TopInteractionsWidget::class, $widgets);
});

it('computes the source chart data correctly', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'dashboard2@test.com',
        'password' => 'password',
    ]);

    Lead::factory()->count(2)->create(['source' => LeadSource::ContactForm]);
    Lead::factory()->count(1)->create(['source' => LeadSource::WhatsApp]);

    Livewire::actingAs($user)
        ->test(LeadsSourceChartWidget::class)
        ->assertSuccessful();

    $data = app(LeadsSourceChartWidget::class)->getData();

    $this->assertCount(5, $data['labels']);
    $this->assertSame([2, 0, 1, 0, 0], $data['datasets'][0]['data']);
    $this->assertSame('Formulario de Contacto', $data['labels'][0]);
});

it('computes the service chart data correctly', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'dashboard4@test.com',
        'password' => 'password',
    ]);

    Lead::factory()->count(3)->create(['service' => LeadService::PaginaWeb]);
    Lead::factory()->count(1)->create(['service' => LeadService::MarketingDigital]);
    Lead::factory()->create(['service' => null]);

    Livewire::actingAs($user)
        ->test(LeadsServiceChartWidget::class)
        ->assertSuccessful();

    $data = app(LeadsServiceChartWidget::class)->getData();

    $this->assertCount(6, $data['labels']);
    $this->assertSame([3, 0, 0, 1, 0, 0], $data['datasets'][0]['data']);
    $this->assertSame('Página Web', $data['labels'][0]);
});

it('computes the trend chart over 30 days', function () {
    $user = User::create([
        'name' => 'Admin',
        'email' => 'dashboard3@test.com',
        'password' => 'password',
    ]);

    Lead::factory()->count(2)->create(['created_at' => today()]);

    Livewire::actingAs($user)
        ->test(LeadsTrendChartWidget::class)
        ->assertSuccessful();

    $data = app(LeadsTrendChartWidget::class)->getData();

    $this->assertCount(30, $data['labels']);
    $this->assertCount(30, $data['datasets'][0]['data']);
    $this->assertSame(2, $data['datasets'][0]['data'][29]);
});
