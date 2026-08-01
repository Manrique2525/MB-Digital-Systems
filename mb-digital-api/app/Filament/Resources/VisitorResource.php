<?php

namespace App\Filament\Resources;

use App\Enums\EventType;
use App\Filament\Resources\VisitorResource\Pages;
use App\Filament\Resources\VisitorResource\RelationManagers\InteractionsRelationManager;
use App\Models\Visitor;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class VisitorResource extends Resource
{
    protected static ?string $model = Visitor::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-alt';

    protected static ?string $navigationLabel = 'Visitantes';

    protected static ?string $pluralLabel = 'Visitantes';

    protected static ?string $recordTitleAttribute = 'session_id';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('#')
                    ->sortable()
                    ->width(60)
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('first_page')
                    ->label('Primera página')
                    ->limit(50)
                    ->searchable(),

                Tables\Columns\TextColumn::make('page_views_count')
                    ->label('Vistas')
                    ->sortable()
                    ->alignment('center'),

                Tables\Columns\IconColumn::make('has_lead')
                    ->label('¿Lead?')
                    ->boolean()
                    ->state(fn (Visitor $visitor) => $visitor->lead()->exists())
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-x-circle')
                    ->color(fn (Visitor $visitor) => $visitor->lead()->exists() ? 'success' : 'gray'),

                Tables\Columns\TextColumn::make('first_seen_at')
                    ->label('Primera visita')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->since()
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('last_seen_at')
                    ->label('Última visita')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->since(),

                Tables\Columns\TextColumn::make('utm_source')
                    ->label('UTM Source')
                    ->searchable()
                    ->toggleable()
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('referrer')
                    ->label('Referente')
                    ->limit(40)
                    ->toggleable()
                    ->hiddenFrom('md'),
            ])
            ->defaultSort('last_seen_at', 'desc')
            ->filters([
                Tables\Filters\Filter::make('online')
                    ->label('En línea ahora')
                    ->query(fn ($query) => $query->online()),
                Tables\Filters\Filter::make('has_lead')
                    ->label('Con lead')
                    ->query(fn ($query) => $query->whereHas('lead')),
                Tables\Filters\Filter::make('no_lead')
                    ->label('Sin lead')
                    ->query(fn ($query) => $query->whereDoesntHave('lead')),
                Tables\Filters\SelectFilter::make('interaction')
                    ->label('Interactuó con')
                    ->options(collect(EventType::cases())->mapWithKeys(
                        fn ($case) => [$case->value => $case->label()]
                    ))
                    ->query(fn (Builder $query, array $data) => $query
                        ->when(
                            $data['value'],
                            fn (Builder $q, string $eventType) => $q->whereHas(
                                'events',
                                fn ($q) => $q->where('event_type', $eventType)
                            )
                        )
                    ),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->label('Ver')
                    ->icon('heroicon-o-eye'),
            ])
            ->bulkActions([]);
    }

    public static function getRelations(): array
    {
        return [
            InteractionsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVisitors::route('/'),
            'view' => Pages\ViewVisitor::route('/{record}'),
        ];
    }
}
