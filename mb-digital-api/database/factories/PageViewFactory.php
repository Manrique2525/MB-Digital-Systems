<?php

namespace Database\Factories;

use App\Models\PageView;
use App\Models\Visitor;
use Illuminate\Database\Eloquent\Factories\Factory;

class PageViewFactory extends Factory
{
    protected $model = PageView::class;

    public function definition(): array
    {
        return [
            'visitor_id' => Visitor::factory(),
            'url' => $this->faker->randomElement([
                '/', '/#servicios', '/#precios', '/#proyectos',
                '/#por-que', '/#contacto', '/#faq',
            ]),
            'title' => $this->faker->randomElement([
                'Inicio', 'Servicios', 'Planes', 'Proyectos',
                'Contacto', 'FAQ',
            ]),
            'referrer' => $this->faker->randomElement([null, 'https://google.com', 'https://facebook.com']),
            'created_at' => now()->subMinutes($this->faker->numberBetween(1, 60)),
        ];
    }
}
