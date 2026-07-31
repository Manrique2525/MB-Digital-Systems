<?php

namespace App\Filament\Pages;

use App\Filament\Resources\LeadResource\Widgets\LeadsServiceChartWidget;
use App\Filament\Resources\LeadResource\Widgets\LeadsSourceChartWidget;
use App\Filament\Resources\LeadResource\Widgets\LeadsTrendChartWidget;
use App\Filament\Widgets\StatsOverviewWidget;
use App\Filament\Widgets\TopInteractionsWidget;
use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    protected static ?string $title = 'Dashboard';

    protected static ?string $navigationLabel = 'Dashboard';

    public function getWidgets(): array
    {
        return [
            StatsOverviewWidget::class,
            LeadsTrendChartWidget::class,
            LeadsSourceChartWidget::class,
            LeadsServiceChartWidget::class,
            TopInteractionsWidget::class,
        ];
    }

    public function getColumns(): int|string|array
    {
        return 12;
    }
}
