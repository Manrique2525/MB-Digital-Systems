<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class CreateAdminUser extends Command
{
    protected $signature = 'app:create-admin';

    protected $description = 'Crea el usuario admin de Filament si no existe';

    public function handle(): int
    {
        $email = env('ADMIN_EMAIL', 'contacto@mbdigitalsystems.com');
        $password = env('ADMIN_PASSWORD');

        if (blank($password)) {
            $this->warn('ADMIN_PASSWORD no configurada - admin no creado.');

            return self::SUCCESS;
        }

        User::firstOrCreate(
            ['email' => $email],
            [
                'name' => 'Admin',
                'password' => $password,
                'email_verified_at' => now(),
            ]
        );

        $this->info("Admin listo: {$email}");

        return self::SUCCESS;
    }
}
