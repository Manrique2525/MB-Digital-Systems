<?php

namespace App\Filament\Resources\VisitorResource\RelationManagers;

use App\Enums\EventType;
use App\Models\LeadEvent;
use App\Support\InteractionFormatter;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class InteractionsRelationManager extends RelationManager
{
    protected static string $relationship = 'events';

    protected static ?string $title = 'Interacciones';

    protected static ?string $icon = 'heroicon-o-cursor-arrow-rays';

    public function canCreate(): bool
    {
        return false;
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('event_type')
                    ->label('Interacción')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => InteractionFormatter::label($state))
                    ->color(fn (string $state) => match ($state) {
                        'wa_click', 'hero_cta', 'form_submit' => 'success',
                        'pricing_view', 'portfolio_view' => 'info',
                        'form_start' => 'violet',
                        'project_click', 'service_click' => 'warning',
                        default => 'gray',
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('section')
                    ->label('Sección')
                    ->placeholder('—')
                    ->formatStateUsing(fn (LeadEvent $record) => InteractionFormatter::section($record->section)),
                Tables\Columns\TextColumn::make('meta')
                    ->label('Detalle')
                    ->placeholder('—')
                    ->formatStateUsing(function ($state) {
                        if (! is_array($state) || empty($state)) {
                            return null;
                        }

                        return collect($state)->map(fn ($value, $key) => "{$key}: {$value}")->join(' · ');
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Fecha y hora')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('event_type')
                    ->label('Tipo de interacción')
                    ->options(collect(EventType::cases())->mapWithKeys(
                        fn ($case) => [$case->value => $case->label()]
                    )),
            ]);
    }
}
