<?php

namespace App\Providers;

use App\Events\LeadCreated;
use App\Listeners\SendLeadAutoresponse;
use App\Listeners\SendLeadNotification;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    {
        Event::listen(
            LeadCreated::class,
            [SendLeadNotification::class, 'handle'],
        );

        Event::listen(
            LeadCreated::class,
            [SendLeadAutoresponse::class, 'handle'],
        );
    }
}
