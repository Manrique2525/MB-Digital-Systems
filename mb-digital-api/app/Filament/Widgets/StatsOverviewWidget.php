<?php

namespace App\Filament\Widgets;

use App\Enums\LeadStatus;
use App\Models\Lead;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseWidget
{
    protected static ?string $pollingInterval = '60s';

    protected function getStats(): array
    {
        $totalLeads = Lead::count();
        $todayLeads = Lead::today()->count();
        $pending = Lead::whereIn('status', ['new', 'contacted'])->count();
        $wonThisMonth = Lead::byStatus(LeadStatus::Won)->thisMonth()->count();

        $conversionRate = $totalLeads > 0
            ? round((Lead::byStatus(LeadStatus::Won)->count() / $totalLeads) * 100, 1)
            : 0;

        return [
            Stat::make('Total Leads', $totalLeads)
                ->description('Registrados en el sistema')
                ->descriptionIcon('heroicon-o-users')
                ->color('primary'),

            Stat::make('Leads Hoy', $todayLeads)
                ->description('En las últimas 24 horas')
                ->descriptionIcon('heroicon-o-calendar')
                ->color($todayLeads > 0 ? 'success' : 'gray'),

            Stat::make('Pendientes', $pending)
                ->description('Nuevos + Contactados sin cerrar')
                ->descriptionIcon('heroicon-o-clock')
                ->color($pending > 0 ? 'warning' : 'success'),

            Stat::make('Tasa de Conversión', "{$conversionRate}%")
                ->description("{$wonThisMonth} ganados este mes")
                ->descriptionIcon('heroicon-o-arrow-trending-up')
                ->color($conversionRate > 20 ? 'success' : 'primary'),
        ];
    }
}
