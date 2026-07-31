<?php

namespace App\Console\Commands;

use App\Mail\LeadFollowupMail;
use App\Models\Lead;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendLeadFollowups extends Command
{
    protected $signature = 'leads:send-followups';

    protected $description = 'Envía un correo de seguimiento a leads con más de 24h sin respuesta';

    public function handle(): int
    {
        $sent = 0;

        Lead::query()->pendingFollowup()->each(function (Lead $lead) use (&$sent) {
            Mail::to($lead->email)->send(new LeadFollowupMail($lead));

            $lead->update(['followup_sent_at' => now()]);

            $sent++;
        });

        $this->info("Follow-up enviado a {$sent} lead(s).");

        return self::SUCCESS;
    }
}
