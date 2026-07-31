<?php

namespace App\Filament\Resources\VisitorResource\Pages;

use App\Filament\Resources\VisitorResource;
use App\Filament\Resources\VisitorResource\Widgets\VisitorTimelineWidget;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewVisitor extends ViewRecord
{
    protected static string $resource = VisitorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('create_lead')
                ->label('Crear Lead')
                ->icon('heroicon-o-user-plus')
                ->color('primary')
                ->url(fn () => "/admin/leads/create?visitor_id={$this->record->id}"),
        ];
    }

    protected function getFooterWidgets(): array
    {
        return [
            VisitorTimelineWidget::make(['record' => $this->record]),
        ];
    }
}
