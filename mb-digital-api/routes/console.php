<?php

use App\Console\Commands\CleanExpiredVisitors;
use App\Console\Commands\RemindStaleLeads;
use App\Console\Commands\SendLeadFollowups;
use Illuminate\Support\Facades\Schedule;

Schedule::command(CleanExpiredVisitors::class)->weekly();
Schedule::command(RemindStaleLeads::class)->hourly();
Schedule::command(SendLeadFollowups::class)->hourly();

// Register command for artisan list
Artisan::command('tracking:clean-expired', function () {
    $this->call(CleanExpiredVisitors::class);
})->purpose('Eliminar visitantes inactivos de más de 90 días');
