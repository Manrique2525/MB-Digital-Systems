<?php

use App\Exceptions\LeadStoreException;
use App\Exceptions\TrackingException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (TrackingException $e) {
            return $e->render();
        });
        $exceptions->render(function (LeadStoreException $e) {
            return $e->render();
        });
    })
    ->create();
