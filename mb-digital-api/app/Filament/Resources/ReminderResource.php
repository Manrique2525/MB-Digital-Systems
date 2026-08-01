<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReminderResource\Pages;
use App\Models\Reminder;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ReminderResource extends Resource
{
    protected static ?string $model = Reminder::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell';

    protected static ?string $navigationLabel = 'Recordatorios';

    protected static ?string $pluralLabel = 'Recordatorios';

    protected static ?string $recordTitleAttribute = 'title';

    public static function getNavigationBadge(): ?string
    {
        return (string) Reminder::query()->pending()->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        $overdue = Reminder::query()->overdue()->count();

        return $overdue > 0 ? 'warning' : 'gray';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Recordatorio')
                    ->description('Agenda un seguimiento para un lead.')
                    ->icon('heroicon-o-bell')
                    ->schema([
                        Forms\Components\Select::make('lead_id')
                            ->label('Lead')
                            ->relationship('lead', 'name')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->helperText('Lead al que estará asociado este recordatorio.'),
                        Forms\Components\TextInput::make('title')
                            ->label('Título')
                            ->required()
                            ->maxLength(200)
                            ->prefixIcon('heroicon-o-pencil-square')
                            ->placeholder('Ej. Llamar para presentar la propuesta'),
                        Forms\Components\Textarea::make('description')
                            ->label('Descripción')
                            ->rows(3)
                            ->maxLength(2000)
                            ->placeholder('Contexto del seguimiento...'),
                        Forms\Components\DateTimePicker::make('due_at')
                            ->label('Vence')
                            ->default(now()->addHours(24))
                            ->required()
                            ->helperText('Fecha y hora límite para completar el seguimiento.'),
                        Forms\Components\Toggle::make('completed')
                            ->label('Completada')
                            ->default(false),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('lead.name')
                    ->label('Lead')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('title')
                    ->label('Título')
                    ->searchable()
                    ->limit(40),

                Tables\Columns\TextColumn::make('due_at')
                    ->label('Vence')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->since(),

                Tables\Columns\IconColumn::make('completed')
                    ->label('Estado')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-clock')
                    ->color(fn (bool $state): string => $state ? 'success' : 'warning'),
            ])
            ->modifyQueryUsing(fn (Builder $query) => $query->orderBy('completed')->orderBy('due_at'))
            ->filters([
                Tables\Filters\SelectFilter::make('completed')
                    ->label('Estado')
                    ->options([
                        '0' => 'Pendiente',
                        '1' => 'Completada',
                    ]),
                Tables\Filters\Filter::make('overdue')
                    ->label('Vencidas')
                    ->query(fn (Builder $query) => $query->overdue()),
                Tables\Filters\Filter::make('due_today')
                    ->label('Vencen hoy')
                    ->query(fn (Builder $query) => $query->whereDate('due_at', today())),
            ])
            ->actions([
                Tables\Actions\Action::make('mark_completed')
                    ->label('Completar')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->requiresConfirmation()
                    ->modalHeading('Marcar recordatorio como completada')
                    ->visible(fn (Reminder $reminder) => ! $reminder->completed)
                    ->action(function (Reminder $reminder) {
                        $reminder->markAsCompleted();
                        Notification::make()
                            ->title('Recordatorio completada')
                            ->success()
                            ->send();
                    }),
                Tables\Actions\ViewAction::make()
                    ->label('Ver')
                    ->icon('heroicon-o-eye'),
                Tables\Actions\EditAction::make()
                    ->label('Editar')
                    ->icon('heroicon-o-pencil'),
                Tables\Actions\DeleteAction::make()
                    ->label('Eliminar')
                    ->icon('heroicon-o-trash'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListReminders::route('/'),
            'create' => Pages\CreateReminder::route('/create'),
            'view' => Pages\ViewReminder::route('/{record}'),
            'edit' => Pages\EditReminder::route('/{record}/edit'),
        ];
    }
}
