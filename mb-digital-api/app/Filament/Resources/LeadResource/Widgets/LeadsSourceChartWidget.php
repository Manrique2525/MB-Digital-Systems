<?php

namespace App\Filament\Resources\LeadResource\Widgets;

use App\Enums\LeadSource;
use App\Models\Lead;
use Filament\Widgets\ChartWidget;

class LeadsSourceChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Leads por fuente';

    protected int|string|array $columnSpan = 4;

    protected static ?string $pollingInterval = null;

    public function getData(): array
    {
        $colors = [
            LeadSource::ContactForm->value => '#3B82F6',
            LeadSource::LeadMagnet->value => '#8B5CF6',
            LeadSource::WhatsApp->value => '#10B981',
            LeadSource::Referral->value => '#F59E0B',
            LeadSource::Landing->value => '#06B6D4',
        ];

        $sources = collect(LeadSource::cases());

        return [
            'datasets' => [
                [
                    'data' => $sources->map(
                        fn (LeadSource $source) => Lead::where('source', $source->value)->count()
                    )->toArray(),
                    'backgroundColor' => $sources->map(
                        fn (LeadSource $source) => $colors[$source->value] ?? '#64748B'
                    )->toArray(),
                ],
            ],
            'labels' => $sources->map(fn (LeadSource $source) => $source->label())->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
