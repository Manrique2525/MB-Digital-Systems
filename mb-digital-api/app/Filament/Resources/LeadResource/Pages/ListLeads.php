<?php

namespace App\Filament\Resources\LeadResource\Pages;

use App\Filament\Resources\LeadResource;
use App\Filament\Widgets\StatsOverviewWidget;
use App\Models\Lead;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLeads extends ListRecords
{
    protected static string $resource = LeadResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('export_csv')
                ->label('Exportar CSV')
                ->icon('heroicon-o-arrow-down-tray')
                ->color('gray')
                ->action(function () {
                    return response()->streamDownload(function () {
                        $handle = fopen('php://output', 'w');
                        fputcsv($handle, [
                            'ID', 'Nombre', 'Email', 'Teléfono', 'Mensaje', 'Fuente',
                            'Estado', 'Valoración', 'Recibido', 'Contactado',
                        ]);

                        $this->getFilteredTableQuery()->each(function (Lead $lead) use ($handle) {
                            fputcsv($handle, [
                                $lead->id,
                                $lead->name,
                                $lead->email,
                                $lead->phone,
                                $lead->message,
                                $lead->source?->label(),
                                $lead->status?->label(),
                                $lead->rating,
                                $lead->created_at?->format('d/m/Y H:i'),
                                $lead->contacted_at?->format('d/m/Y H:i'),
                            ]);
                        });

                        fclose($handle);
                    }, 'leads-'.now()->format('Ymd-His').'.csv', ['Content-Type' => 'text/csv; charset=UTF-8']);
                }),
            Actions\CreateAction::make()
                ->label('Nuevo Lead')
                ->icon('heroicon-o-plus'),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            StatsOverviewWidget::class,
        ];
    }
}
