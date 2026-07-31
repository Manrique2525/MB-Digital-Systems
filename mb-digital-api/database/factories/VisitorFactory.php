<?php

namespace Database\Factories;

use App\Models\Visitor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class VisitorFactory extends Factory
{
    protected $model = Visitor::class;

    public function definition(): array
    {
        return [
            'session_id' => (string) Str::uuid(),
            'ip' => $this->faker->ipv4(),
            'user_agent' => $this->faker->userAgent(),
            'referrer' => $this->faker->randomElement([null, 'https://google.com', 'https://facebook.com', 'https://instagram.com']),
            'utm_source' => $this->faker->randomElement([null, 'google', 'facebook', 'direct']),
            'first_page' => $this->faker->randomElement(['/', '/#servicios', '/#precios', '/#proyectos']),
            'page_views_count' => $this->faker->numberBetween(1, 10),
            'first_seen_at' => now()->subHours($this->faker->numberBetween(1, 72)),
            'last_seen_at' => now()->subMinutes($this->faker->numberBetween(1, 120)),
        ];
    }
}
