#!/bin/sh

set -e

php artisan migrate --force

PORT="${PORT:-80}"
sed -i "s/^Listen 80.*/Listen ${PORT}/" /etc/apache2/ports.conf
sed -i "s/:80/:${PORT}/g" /etc/apache2/sites-available/*.conf

exec apache2-foreground
