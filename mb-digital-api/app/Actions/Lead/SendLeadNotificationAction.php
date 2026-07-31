<?php

namespace App\Actions\Lead;

use App\Mail\LeadNotificationMail;
use App\Models\Lead;
use App\Models\Setting;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendLeadNotificationAction
{
    public function __invoke(Lead $lead): void
    {
        $adminEmail = Setting::string('admin_email', (string) config('tracking.admin_email'));

        if (! $adminEmail) {
            Log::warning('No admin email configured for lead notification', ['lead_id' => $lead->id]);

            return;
        }

        $timeline = $this->buildTimeline($lead);

        Mail::to($adminEmail)
            ->queue(new LeadNotificationMail($lead, $timeline));
    }

    private function buildTimeline(Lead $lead): array
    {
        $visitor = $lead->visitor;

        if (! $visitor) {
            return [];
        }

        $timeline = [];

        foreach ($visitor->pageViews()->orderBy('created_at')->get() as $pageView) {
            $timeline[] = [
                'time' => $pageView->created_at->format('H:i'),
                'icon' => '🌐',
                'label' => "Visitó {$pageView->url}",
            ];
        }

        foreach ($visitor->events()->orderBy('created_at')->get() as $event) {
            $timeline[] = [
                'time' => $event->created_at->format('H:i'),
                'icon' => '👆',
                'label' => $event->section
                    ? "{$event->event_type} en {$event->section}"
                    : $event->event_type,
            ];
        }

        $timeline[] = [
            'time' => $lead->created_at->format('H:i'),
            'icon' => '📝',
            'label' => 'Envió formulario — se convirtió en lead',
        ];

        return $timeline;
    }
}
