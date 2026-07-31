<?php

use App\Http\Controllers\Api\V1\LeadController;
use App\Http\Controllers\Api\V1\TrackingController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('/track/page', [TrackingController::class, 'page'])->name('api.track.page');
    Route::post('/track/event', [TrackingController::class, 'event'])->name('api.track.event');
    Route::post('/leads', [LeadController::class, 'store'])->name('api.leads.store');
});
