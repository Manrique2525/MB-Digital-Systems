<?php

return [
    'admin_email' => env('ADMIN_EMAIL', 'contacto@mbdigitalsystems.com'),
    'whatsapp_number' => env('WHATSAPP_NUMBER', '529931782620'),
    'cleanup_days' => env('TRACKING_CLEANUP_DAYS', 90),
    'stale_hours' => env('LEAD_STALE_HOURS', 48),
    'followup_hours' => env('LEAD_FOLLOWUP_HOURS', 24),
];
