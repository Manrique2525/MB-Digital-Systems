<?php

namespace App\Filament\Resources\LeadResource\Pages;

use App\Filament\Resources\LeadResource;
use App\Filament\Resources\LeadResource\Widgets\LeadTimelineWidget;
use App\Models\Setting;
use Filament\Actions;
use Filament\Forms;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ViewRecord;

class ViewLead extends ViewRecord
{
    protected static string $resource = LeadResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('whatsapp')
                ->label('WhatsApp')
                ->icon('heroicon-o-chat-bubble-left-right')
                ->color('success')
                ->url(fn () => $this->getWhatsAppUrl())
                ->openUrlInNewTab(),

            Actions\Action::make('add_note')
                ->label('Añadir nota')
                ->icon('heroicon-o-pencil-square')
                ->color('info')
                ->form([
                    Forms\Components\Textarea::make('note')
                        ->label('Nota')
                        ->required()
                        ->rows(3)
                        ->maxLength(1000),
                ])
                ->action(function (array $data) {
                    $this->record->notes()->create([
                        'note' => $data['note'],
                        'created_by' => auth()->user()->name,
                    ]);
                    Notification::make()
                        ->title('Nota agregada al lead')
                        ->success()
                        ->send();
                }),

            Actions\Action::make('mark_contacted')
                ->label('Marcar como Contactado')
                ->icon('heroicon-o-check-circle')
                ->color('violet')
                ->action(function () {
                    $this->record->markAsContacted();
                    Notification::make()
                        ->title('Lead marcado como contactado')
                        ->success()
                        ->send();
                })
                ->visible(fn () => $this->record->status->value === 'new'),

            Actions\EditAction::make()
                ->label('Editar')
                ->icon('heroicon-o-pencil'),

            Actions\DeleteAction::make()
                ->label('Eliminar')
                ->icon('heroicon-o-trash'),
        ];
    }

    protected function getFooterWidgets(): array
    {
        return [
            LeadTimelineWidget::make(['record' => $this->record]),
        ];
    }

    private function getWhatsAppUrl(): string
    {
        $number = Setting::string('whatsapp_number', (string) config('tracking.whatsapp_number'));
        $name = $this->record->name;
        $message = "Hola {$name}, soy de MB Digital Systems. Vi que solicitaste información en nuestra página web. ¿Te puedo ayudar en algo?";

        return "https://wa.me/{$number}?text=".urlencode($message);
    }
}
