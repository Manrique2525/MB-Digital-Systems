#!/bin/sh

set -e

php artisan migrate --force
php artisan app:create-admin || true

exec apache2-foreground
