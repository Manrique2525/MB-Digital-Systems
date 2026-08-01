<?php

namespace App\Filament\Resources\LeadResource\Widgets;

use App\Models\Lead;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class LeadsTrendChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Leads por día (últimos 30 días)';

    protected int|string|array $columnSpan = 12;

    protected static ?string $pollingInterval = '60s';

    protected function getMaxHeight(): ?string
    {
        return '320px';
    }

    public function getData(): array
    {
        $days = collect(range(29, 0))->map(function (int $daysAgo) {
            $date = now()->subDays($daysAgo)->toDateString();

            return [
                'date' => $date,
                'count' => Lead::whereDate('created_at', $date)->count(),
            ];
        });

        return [
            'datasets' => [
                [
                    'label' => 'Leads',
                    'data' => $days->pluck('count')->toArray(),
                    'borderColor' => '#3B82F6',
                    'backgroundColor' => 'rgba(59, 130, 246, 0.1)',
                    'fill' => true,
                    'tension' => 0.4,
                ],
            ],
            'labels' => $days->map(
                fn (array $day) => Carbon::parse($day['date'])->format('d/m')
            )->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    /** @return array<string, mixed> */
    protected function getOptions(): array
    {
        return [
            'scales' => [
                'x' => [
                    'ticks' => [
                        'maxTicksLimit' => 6,
                        'maxRotation' => 0,
                        'autoSkip' => true,
                    ],
                ],
            ],
            'plugins' => [
                'legend' => [
                    'display' => false,
                ],
            ],
        ];
    }
}
