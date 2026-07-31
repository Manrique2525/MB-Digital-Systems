<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class Settings extends Page
{
    use InteractsWithActions;
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static ?string $navigationLabel = 'Ajustes';

    protected static ?string $title = 'Ajustes del panel';

    protected static string $view = 'filament-pages.settings';

    public array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'followup_hours' => Setting::int('followup_hours', (int) config('tracking.followup_hours', 24)),
            'stale_hours' => Setting::int('stale_hours', (int) config('tracking.stale_hours', 48)),
            'cleanup_days' => Setting::int('cleanup_days', (int) config('tracking.cleanup_days', 90)),
            'whatsapp_number' => Setting::string('whatsapp_number', (string) config('tracking.whatsapp_number')),
            'admin_email' => Setting::string('admin_email', (string) config('tracking.admin_email')),
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('followup_hours')
                    ->label('Horas para follow-up de correo')
                    ->helperText('Tras este tiempo sin respuesta se envía el correo de seguimiento automático.')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(720)
                    ->required(),
                TextInput::make('stale_hours')
                    ->label('Horas para lead sin contacto')
                    ->helperText('Tras este tiempo en estado "Nuevo" se crea un recordatorio automático.')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(720)
                    ->required(),
                TextInput::make('cleanup_days')
                    ->label('Días para limpiar visitantes')
                    ->helperText('Visitantes sin lead inactivos por este tiempo se eliminan semanalmente.')
                    ->numeric()
                    ->minValue(30)
                    ->maxValue(365)
                    ->required(),
                TextInput::make('whatsapp_number')
                    ->label('Número de WhatsApp')
                    ->helperText('Formato internacional sin "+" (ej. 529931782620).')
                    ->tel()
                    ->required(),
                TextInput::make('admin_email')
                    ->label('Email de notificaciones')
                    ->helperText('Correo que recibe las notificaciones de nuevos leads.')
                    ->email()
                    ->required(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        Setting::set('followup_hours', $data['followup_hours']);
        Setting::set('stale_hours', $data['stale_hours']);
        Setting::set('cleanup_days', $data['cleanup_days']);
        Setting::set('whatsapp_number', $data['whatsapp_number']);
        Setting::set('admin_email', $data['admin_email']);

        Notification::make()
            ->title('Ajustes guardados')
            ->success()
            ->send();
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Guardar ajustes')
                ->icon('heroicon-o-check')
                ->submit('save'),
        ];
    }
}
