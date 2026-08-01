<?php

namespace App\Filament\Resources\LeadResource\Widgets;

use App\Models\Lead;
use App\Support\InteractionFormatter;
use Filament\Widgets\Widget;

class LeadTimelineWidget extends Widget
{
    protected static string $view = 'filament-panels.widgets.lead-timeline';

    public ?Lead $record = null;

    public function getTimeline(): array
    {
        $entries = [];

        $visitor = $this->record?->visitor;

        if (! $visitor) {
            return [
                [
                    'time' => $this->record->created_at->format('H:i'),
                    'date' => $this->record->created_at->format('d/m/Y'),
                    'icon' => 'heroicon-o-user-plus',
                    'title' => 'Lead creado manualmente',
                    'description' => 'Sin actividad de navegación registrada',
                ],
            ];
        }

        foreach ($visitor->pageViews()->orderBy('created_at')->get() as $pageView) {
            $entries[] = [
                'time' => $pageView->created_at->format('H:i'),
                'date' => $pageView->created_at->format('d/m/Y'),
                'icon' => 'heroicon-o-globe-alt',
                'title' => 'Visitó página',
                'description' => $pageView->title ?? $pageView->url,
            ];
        }

        foreach ($visitor->events()->orderBy('created_at')->get() as $event) {
            $entries[] = [
                'time' => $event->created_at->format('H:i'),
                'date' => $event->created_at->format('d/m/Y'),
                'icon' => InteractionFormatter::icon($event->event_type),
                'title' => InteractionFormatter::label($event->event_type),
                'description' => InteractionFormatter::description($event->section, $event->meta),
            ];
        }

        $entries[] = [
            'time' => $this->record->created_at->format('H:i'),
            'date' => $this->record->created_at->format('d/m/Y'),
            'icon' => 'heroicon-o-check-badge',
            'title' => 'Se convirtió en lead',
            'description' => "Fuente: {$this->record->source->label()}",
            'highlight' => true,
        ];

        foreach ($this->record->notes()->get() as $note) {
            $entries[] = [
                'time' => $note->created_at->format('H:i'),
                'date' => $note->created_at->format('d/m/Y'),
                'icon' => 'heroicon-o-document-text',
                'title' => "Nota: {$note->note}",
                'description' => $note->created_by ? "Por: {$note->created_by}" : '',
            ];
        }

        foreach ($this->record->reminders()->get() as $reminder) {
            $entries[] = [
                'time' => $reminder->due_at->format('H:i'),
                'date' => $reminder->due_at->format('d/m/Y'),
                'icon' => $reminder->completed ? 'heroicon-o-check-circle' : 'heroicon-o-clock',
                'title' => "Recordatorio: {$reminder->title}",
                'description' => $reminder->completed ? 'Completado' : 'Pendiente',
            ];
        }

        usort($entries, fn ($a, $b) => ($a['date'].$a['time']) <=> ($b['date'].$b['time']));

        return $entries;
    }
}
