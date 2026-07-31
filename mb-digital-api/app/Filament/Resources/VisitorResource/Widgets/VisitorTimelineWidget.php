<?php

namespace App\Filament\Resources\VisitorResource\Widgets;

use App\Models\Visitor;
use App\Support\InteractionFormatter;
use Filament\Widgets\Widget;

class VisitorTimelineWidget extends Widget
{
    protected static string $view = 'filament-panels.widgets.visitor-timeline';

    public ?Visitor $record = null;

    public function getTimeline(): array
    {
        $entries = [];

        foreach ($this->record->pageViews()->orderBy('created_at')->get() as $pageView) {
            $entries[] = [
                'time' => $pageView->created_at->format('H:i'),
                'date' => $pageView->created_at->format('d/m/Y'),
                'icon' => '🌐',
                'title' => 'Visitó página',
                'description' => $pageView->title ?? $pageView->url,
            ];
        }

        foreach ($this->record->events()->orderBy('created_at')->get() as $event) {
            $entries[] = [
                'time' => $event->created_at->format('H:i'),
                'date' => $event->created_at->format('d/m/Y'),
                'icon' => InteractionFormatter::icon($event->event_type),
                'title' => InteractionFormatter::label($event->event_type),
                'description' => InteractionFormatter::description($event->section),
            ];
        }

        usort($entries, fn ($a, $b) => ($a['date'].$a['time']) <=> ($b['date'].$b['time']));

        return $entries;
    }
}
