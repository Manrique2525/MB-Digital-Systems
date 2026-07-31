<?php

namespace App\Console\Commands;

use App\Enums\LeadStatus;
use App\Models\Lead;
use App\Models\Setting;
use Illuminate\Console\Command;

class RemindStaleLeads extends Command
{
    protected $signature = 'leads:remind-stale';

    protected $description = 'Crea recordatorios vencidos para leads Nuevos sin contacto tras un tiempo';

    public function handle(): int
    {
        $hours = Setting::int('stale_hours', (int) config('tracking.stale_hours', 48));
        $cutoff = now()->subHours($hours);

        $leads = Lead::where('status', LeadStatus::New)
            ->where('created_at', '<=', $cutoff)
            ->whereDoesntHave('reminders', fn ($query) => $query->where('completed', false))
            ->get();

        foreach ($leads as $lead) {
            $lead->reminders()->create([
                'title' => "Lead sin contacto: {$lead->name}",
                'description' => "Lleva más de {$hours} horas en estado Nuevo y aún no se ha contactado.",
                'due_at' => now(),
                'completed' => false,
            ]);

            $lead->notes()->create([
                'note' => "Recordatorio automático: sin contacto tras {$hours}h",
                'created_by' => 'Sistema',
            ]);
        }

        $this->info("Creados {$leads->count()} recordatorios para leads sin contacto");

        return Command::SUCCESS;
    }
}
