<?php

namespace App\Filament\Resources\LeadResource\Widgets;

use App\Enums\LeadService;
use App\Models\Lead;
use Filament\Widgets\ChartWidget;

class LeadsServiceChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Leads por servicio de interés';

    protected int|string|array $columnSpan = 4;

    protected static ?string $pollingInterval = null;

    public function getData(): array
    {
        $colors = [
            LeadService::PaginaWeb->value => '#3B82F6',
            LeadService::Ecommerce->value => '#8B5CF6',
            LeadService::SistemaAMedida->value => '#10B981',
            LeadService::MarketingDigital->value => '#F59E0B',
            LeadService::Diseno->value => '#EC4899',
            LeadService::Otro->value => '#64748B',
        ];

        $services = collect(LeadService::cases());

        return [
            'datasets' => [
                [
                    'data' => $services->map(
                        fn (LeadService $service) => Lead::where('service', $service->value)->count()
                    )->toArray(),
                    'backgroundColor' => $services->map(
                        fn (LeadService $service) => $colors[$service->value] ?? '#64748B'
                    )->toArray(),
                ],
            ],
            'labels' => $services->map(fn (LeadService $service) => $service->label())->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
