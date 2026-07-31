<?php

namespace App\Listeners;

use App\Actions\Lead\SendLeadNotificationAction;
use App\Events\LeadCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendLeadNotification implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(LeadCreated $event): void
    {
        app(SendLeadNotificationAction::class)($event->lead);
    }
}
