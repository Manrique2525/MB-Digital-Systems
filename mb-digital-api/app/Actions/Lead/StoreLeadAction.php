<?php

namespace App\Actions\Lead;

use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use App\Events\LeadCreated;
use App\Models\Lead;
use App\Models\Visitor;

class StoreLeadAction
{
    public function __invoke(
        string $name,
        LeadSource $source,
        ?string $email = null,
        ?string $phone = null,
        ?string $message = null,
        ?string $service = null,
        ?string $sessionId = null,
        LeadStatus $status = LeadStatus::New,
    ): Lead {
        $visitor = $sessionId
            ? Visitor::whereSessionId($sessionId)->first()
            : null;

        $existingLead = $visitor?->lead;

        if ($existingLead) {
            $previousService = $existingLead->service;

            $existingLead->update([
                'name' => $name,
                'email' => $email ?? $existingLead->email,
                'phone' => $phone ?? $existingLead->phone,
                'message' => $message ?? $existingLead->message,
                'service' => $service ?? $existingLead->service,
            ]);

            if ($service && $previousService && $previousService->value !== $service) {
                $newService = LeadService::from($service);
                $existingLead->notes()->create([
                    'note' => "Cambió su interés: {$previousService->label()} → {$newService->label()}",
                    'created_by' => 'Sistema',
                ]);
            }

            if (in_array($existingLead->status, [LeadStatus::New, LeadStatus::Contacted])) {
                $existingLead->transitionStatus(
                    LeadStatus::Qualified,
                    'Reenvió el formulario — lead más caliente',
                );
            }

            return $existingLead;
        }

        $lead = Lead::create([
            'visitor_id' => $visitor?->id,
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'service' => $service,
            'source' => $source,
            'status' => $status,
        ]);

        LeadCreated::dispatch($lead);

        return $lead;
    }
}
