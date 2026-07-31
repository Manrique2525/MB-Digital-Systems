<?php

$databaseUrl = env('DATABASE_URL');

$pgsql = [
    'driver' => 'pgsql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '5432'),
    'database' => env('DB_DATABASE', 'mb_digital'),
    'username' => env('DB_USERNAME', 'mb_digital'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => 'utf8',
    'prefix' => '',
    'prefix_indexes' => true,
    'search_path' => 'public',
    'sslmode' => env('DB_SSLMODE', 'prefer'),
];

if ($databaseUrl) {
    $parsed = parse_url($databaseUrl);

    $pgsql['host'] = $parsed['host'] ?? $pgsql['host'];
    $pgsql['port'] = $parsed['port'] ?? '5432';
    $pgsql['database'] = ltrim($parsed['path'] ?? '', '/') ?: $pgsql['database'];
    $pgsql['username'] = $parsed['user'] ?? $pgsql['username'];
    $pgsql['password'] = $parsed['pass'] ?? $pgsql['password'];
    $pgsql['sslmode'] = 'require';
}

return [
    'default' => env('DB_CONNECTION', 'sqlite'),
    'connections' => [
        'sqlite' => [
            'driver' => 'sqlite',
            'url' => env('DB_URL'),
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
        ],
        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'mb_digital'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ],
        'pgsql' => $pgsql,
    ],
    'migrations' => [
        'table' => 'migrations',
        'update_date_on_run' => true,
    ],
];
