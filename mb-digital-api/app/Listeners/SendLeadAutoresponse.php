<?php

namespace App\Listeners;

use App\Events\LeadCreated;
use App\Mail\LeadAutoresponseMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendLeadAutoresponse implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(LeadCreated $event): void
    {
        $lead = $event->lead;

        if (! $lead->email) {
            return;
        }

        Mail::to($lead->email)
            ->queue(new LeadAutoresponseMail($lead));
    }
}
