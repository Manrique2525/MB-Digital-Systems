<?php

$frontendUrls = env('FRONTEND_URLS', env('FRONTEND_URL', 'http://localhost:3000'));

$allowedOrigins = array_values(array_unique(array_filter(array_map(
    static fn (string $origin): string => trim($origin),
    explode(',', (string) $frontendUrls)
))));

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['GET', 'POST', 'OPTIONS'],
    'allowed_origins' => $allowedOrigins,
    'allowed_origins_patterns' => [],
    'allowed_headers' => [
        'Accept',
        'Authorization',
        'Content-Type',
        'X-CSRF-TOKEN',
        'X-Requested-With',
        'X-XSRF-TOKEN',
    ],
    'exposed_headers' => [],
    'max_age' => 86400,
    'supports_credentials' => filter_var(
        env('CORS_SUPPORTS_CREDENTIALS', false),
        FILTER_VALIDATE_BOOLEAN
    ),
];
