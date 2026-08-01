<?php

namespace App\Filament\Widgets;

use App\Models\LeadEvent;
use App\Support\InteractionFormatter;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class TopInteractionsWidget extends BaseWidget
{
    protected static ?string $heading = 'Top interacciones';

    protected int|string|array $columnSpan = [
        'default' => 'full',
        'lg' => 12,
    ];

    protected static ?string $pollingInterval = '60s';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                LeadEvent::query()
                    ->selectRaw('event_type, section, COUNT(*) as total, MAX(id) as id')
                    ->groupBy('event_type', 'section')
                    ->orderByDesc('total')
                    ->limit(10)
            )
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
                    }),
                Tables\Columns\TextColumn::make('section')
                    ->label('Sección')
                    ->placeholder('—')
                    ->formatStateUsing(function (?string $state) {
                        return InteractionFormatter::section($state);
                    }),
                Tables\Columns\TextColumn::make('total')
                    ->label('Clics')
                    ->badge()
                    ->color('primary')
                    ->alignment('center'),
            ])
            ->paginated(false);
    }
}
