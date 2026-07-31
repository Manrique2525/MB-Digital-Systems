<?php

namespace App\Filament\Resources\VisitorResource\Pages;

use App\Filament\Resources\VisitorResource;
use App\Models\Visitor;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVisitors extends ListRecords
{
    protected static string $resource = VisitorResource::class;

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
                            'ID', 'Primera página', 'Vistas', '¿Lead?', 'IP',
                            'Primera visita', 'Última visita', 'UTM Source', 'Referente',
                        ]);

                        $this->getFilteredTableQuery()->each(function (Visitor $visitor) use ($handle) {
                            fputcsv($handle, [
                                $visitor->id,
                                $visitor->first_page,
                                $visitor->page_views_count,
                                $visitor->lead()->exists() ? 'Sí' : 'No',
                                $visitor->ip_address,
                                $visitor->first_seen_at?->format('d/m/Y H:i'),
                                $visitor->last_seen_at?->format('d/m/Y H:i'),
                                $visitor->utm_source,
                                $visitor->referrer,
                            ]);
                        });

                        fclose($handle);
                    }, 'visitantes-'.now()->format('Ymd-His').'.csv', ['Content-Type' => 'text/csv; charset=UTF-8']);
                }),
        ];
    }
}
