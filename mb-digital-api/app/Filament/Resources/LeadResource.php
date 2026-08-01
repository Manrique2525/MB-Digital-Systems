<?php

namespace App\Filament\Resources;

use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use App\Filament\Resources\LeadResource\Pages;
use App\Filament\Resources\LeadResource\Widgets\LeadTimelineWidget;
use App\Models\Lead;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class LeadResource extends Resource
{
    protected static ?string $model = Lead::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Leads';

    protected static ?string $pluralLabel = 'Leads';

    protected static ?string $recordTitleAttribute = 'name';

    public static function getNavigationBadge(): ?string
    {
        return (string) Lead::where('status', LeadStatus::New)->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        $count = Lead::where('status', LeadStatus::New)->count();

        return $count > 0 ? 'warning' : 'gray';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Información de contacto')
                    ->description('Datos del visitante y mensaje recibido desde la landing.')
                    ->icon('heroicon-o-identification')
                    ->schema([
                        Forms\Components\Select::make('visitor_id')
                            ->label('Visitante vinculado')
                            ->relationship('visitor', 'session_id')
                            ->searchable()
                            ->preload()
                            ->nullable()
                            ->helperText('Se vincula automáticamente al enviar el formulario de la landing.')
                            ->default(fn () => request('visitor_id')),
                        Forms\Components\TextInput::make('name')
                            ->label('Nombre')
                            ->required()
                            ->maxLength(200)
                            ->prefixIcon('heroicon-o-user')
                            ->placeholder('Nombre completo'),
                        Forms\Components\TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->maxLength(255)
                            ->prefixIcon('heroicon-o-envelope')
                            ->placeholder('nombre@correo.com'),
                        Forms\Components\TextInput::make('phone')
                            ->label('Teléfono')
                            ->tel()
                            ->maxLength(50)
                            ->prefixIcon('heroicon-o-phone')
                            ->placeholder('55 1234 5678'),
                        Forms\Components\Textarea::make('message')
                            ->label('Mensaje')
                            ->rows(4)
                            ->maxLength(5000)
                            ->columnSpanFull()
                            ->placeholder('Escribe aquí el mensaje del visitante...'),
                    ])->columns(2),
                Forms\Components\Section::make('Gestión comercial')
                    ->description('Clasifica el interés, la fuente y el estado del seguimiento.')
                    ->icon('heroicon-o-briefcase')
                    ->schema([
                        Forms\Components\Select::make('service')
                            ->label('Interés (servicio)')
                            ->options(collect(LeadService::cases())->mapWithKeys(
                                fn ($case) => [$case->value => $case->label()]
                            ))
                            ->placeholder('Selecciona un servicio')
                            ->helperText('Servicio por el que mostró interés.')
                            ->nullable(),
                        Forms\Components\Select::make('source')
                            ->label('Fuente')
                            ->options(collect(LeadSource::cases())->mapWithKeys(
                                fn ($case) => [$case->value => $case->label()]
                            ))
                            ->helperText('De dónde llegó este contacto.')
                            ->required(),
                        Forms\Components\Select::make('status')
                            ->label('Estado')
                            ->options(collect(LeadStatus::cases())->mapWithKeys(
                                fn ($case) => [$case->value => $case->label()]
                            ))
                            ->required(),
                        Forms\Components\TextInput::make('rating')
                            ->label('Valoración (1-5)')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5)
                            ->placeholder('1 a 5')
                            ->helperText('Qué tan calificado está este contacto.')
                            ->nullable(),
                        Forms\Components\Textarea::make('notes')
                            ->label('Notas internas')
                            ->rows(4)
                            ->columnSpanFull()
                            ->placeholder('Anota aquí el contexto de la conversación...'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->striped()
            ->poll('30s')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('#')
                    ->sortable()
                    ->toggleable()
                    ->width(60)
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('name')
                    ->label('Nombre')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->icon('heroicon-o-envelope')
                    ->copyable()
                    ->toggleable()
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('phone')
                    ->label('Teléfono')
                    ->searchable()
                    ->icon('heroicon-o-phone')
                    ->copyable()
                    ->toggleable()
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('service')
                    ->label('Interés')
                    ->badge()
                    ->color(fn (Lead $lead) => $lead->service ? match ($lead->service) {
                        LeadService::PaginaWeb => 'info',
                        LeadService::Ecommerce => 'violet',
                        LeadService::SistemaAMedida => 'warning',
                        LeadService::MarketingDigital => 'success',
                        LeadService::Diseno => 'danger',
                        LeadService::Otro => 'gray',
                    } : 'gray')
                    ->formatStateUsing(fn (Lead $lead) => $lead->service?->label() ?? '—')
                    ->sortable()
                    ->toggleable()
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('source')
                    ->label('Fuente')
                    ->badge()
                    ->color(fn (Lead $lead) => match ($lead->source) {
                        LeadSource::ContactForm => 'primary',
                        LeadSource::LeadMagnet => 'violet',
                        LeadSource::WhatsApp => 'success',
                        LeadSource::Referral => 'warning',
                        LeadSource::Landing => 'info',
                    })
                    ->formatStateUsing(fn (Lead $lead) => $lead->source->label())
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('status')
                    ->label('Estado')
                    ->badge()
                    ->color(fn (Lead $lead) => match ($lead->status) {
                        LeadStatus::New => 'primary',
                        LeadStatus::Contacted => 'violet',
                        LeadStatus::Qualified => 'warning',
                        LeadStatus::Proposal => 'orange',
                        LeadStatus::Won => 'success',
                        LeadStatus::Lost => 'danger',
                    })
                    ->formatStateUsing(fn (Lead $lead) => $lead->status->label())
                    ->sortable(),

                Tables\Columns\TextColumn::make('visitor.page_views_count')
                    ->label('Páginas')
                    ->sortable()
                    ->toggleable()
                    ->alignment('center')
                    ->hiddenFrom('md'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Recibido')
                    ->since()
                    ->sortable()
                    ->tooltip(fn (Lead $lead) => $lead->created_at->format('d/m/Y H:i')),

                Tables\Columns\TextColumn::make('contacted_at')
                    ->label('Contactado')
                    ->since()
                    ->toggleable()
                    ->tooltip(fn (Lead $lead) => $lead->contacted_at?->format('d/m/Y H:i'))
                    ->hiddenFrom('md'),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('service')
                    ->label('Interés')
                    ->options(collect(LeadService::cases())->mapWithKeys(
                        fn ($case) => [$case->value => $case->label()]
                    )),
                Tables\Filters\SelectFilter::make('status')
                    ->label('Estado')
                    ->options(collect(LeadStatus::cases())->mapWithKeys(
                        fn ($case) => [$case->value => $case->label()]
                    )),
                Tables\Filters\SelectFilter::make('source')
                    ->label('Fuente')
                    ->options(collect(LeadSource::cases())->mapWithKeys(
                        fn ($case) => [$case->value => $case->label()]
                    )),
                Tables\Filters\Filter::make('created_at')
                    ->label('Fecha')
                    ->form([
                        Forms\Components\DatePicker::make('from'),
                        Forms\Components\DatePicker::make('until'),
                    ])
                    ->query(fn (Builder $query, array $data) => $query
                        ->when($data['from'], fn ($q, $d) => $q->whereDate('created_at', '>=', $d))
                        ->when($data['until'], fn ($q, $d) => $q->whereDate('created_at', '<=', $d))
                    ),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->label('Ver')
                    ->icon('heroicon-o-eye'),
                Tables\Actions\EditAction::make()
                    ->label('Editar')
                    ->icon('heroicon-o-pencil'),
                Tables\Actions\Action::make('mark_won')
                    ->label('Ganado')
                    ->icon('heroicon-o-check-badge')
                    ->color('success')
                    ->requiresConfirmation()
                    ->modalHeading('Marcar lead como Ganado')
                    ->modalDescription('Confirma que este lead se convirtió en cliente. Se registrará en el timeline del lead.')
                    ->modalSubmitActionLabel('Sí, es cliente')
                    ->visible(fn (Lead $lead) => $lead->status !== LeadStatus::Won && $lead->status !== LeadStatus::Lost)
                    ->action(function (Lead $lead) {
                        $lead->transitionStatus(LeadStatus::Won, 'Marcado como Ganado — cliente');
                        Notification::make()
                            ->title('Lead marcado como Ganado')
                            ->success()
                            ->send();
                    }),
                Tables\Actions\Action::make('mark_lost')
                    ->label('Perdido')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->modalHeading('Marcar lead como Perdido')
                    ->modalDescription('Confirma que este lead no se convertirá en cliente. Se registrará en el timeline del lead.')
                    ->modalSubmitActionLabel('Sí, perdió')
                    ->visible(fn (Lead $lead) => $lead->status !== LeadStatus::Won && $lead->status !== LeadStatus::Lost)
                    ->action(function (Lead $lead) {
                        $lead->transitionStatus(LeadStatus::Lost, 'Marcado como Perdido');
                        Notification::make()
                            ->title('Lead marcado como Perdido')
                            ->danger()
                            ->send();
                    }),
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

    public static function getWidgets(): array
    {
        return [
            LeadTimelineWidget::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLeads::route('/'),
            'create' => Pages\CreateLead::route('/create'),
            'view' => Pages\ViewLead::route('/{record}'),
            'edit' => Pages\EditLead::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->with(['visitor.pageViews', 'visitor.events', 'notes', 'reminders']);
    }
}
