<?php

namespace App\Actions\Tracking;

use App\Actions\Lead\StoreLeadAction;
use App\Enums\EventType;
use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use App\Models\LeadEvent;
use App\Models\Visitor;

class TrackEventAction
{
    public function __invoke(
        Visitor $visitor,
        EventType $eventType,
        ?string $section = null,
        array $meta = [],
    ): LeadEvent {
        $event = $visitor->events()->create([
            'event_type' => $eventType->value,
            'section' => $section,
            'meta' => ! empty($meta) ? $meta : null,
            'created_at' => now(),
        ]);

        if ($eventType === EventType::WAClick) {
            $lead = $visitor->lead;

            if ($lead) {
                if ($lead->status === LeadStatus::New) {
                    $lead->transitionStatus(
                        LeadStatus::Contacted,
                        'Clic en WhatsApp desde la página — contacto automático',
                    );
                }

                return $event;
            }

            $sectionLabel = $section ? " la sección: {$section}" : ' la página';
            $plan = isset($meta['plan']) ? (string) $meta['plan'] : null;
            $service = LeadService::fromPlan($plan);
            $message = $plan
                ? "Clic en WhatsApp ({$plan}) desde{$sectionLabel}"
                : "Clic en WhatsApp desde{$sectionLabel}";

            app(StoreLeadAction::class)(
                name: 'Visitante (WhatsApp)',
                source: LeadSource::WhatsApp,
                message: $message,
                service: $service?->value,
                sessionId: $visitor->session_id,
            );
        }

        return $event;
    }
}
