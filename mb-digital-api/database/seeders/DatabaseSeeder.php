<?php

namespace Database\Seeders;

use App\Models\Lead;
use App\Models\Visitor;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Demo visitors with page views and events
        $visitors = Visitor::factory(10)
            ->create()
            ->each(function ($visitor) {
                $visitor->pageViews()->createMany([
                    ['url' => '/', 'title' => 'Inicio', 'created_at' => now()->subHours(2)],
                    ['url' => '/#servicios', 'title' => 'Servicios', 'created_at' => now()->subHours(2)->addMinutes(2)],
                    ['url' => '/#precios', 'title' => 'Precios', 'created_at' => now()->subHours(2)->addMinutes(5)],
                ]);
                $visitor->events()->createMany([
                    ['event_type' => 'hero_cta', 'section' => 'hero', 'created_at' => now()->subHours(2)->addMinutes(1)],
                    ['event_type' => 'pricing_view', 'section' => 'pricing', 'created_at' => now()->subHours(2)->addMinutes(4)],
                ]);
                $visitor->increment('page_views_count', 3);
            });

        // Some visitors with leads
        foreach ($visitors->take(3) as $visitor) {
            Lead::factory()
                ->fromMagnet()
                ->create([
                    'visitor_id' => $visitor->id,
                    'email' => "cliente{$visitor->id}@email.com",
                ]);
        }

        // Standalone leads (without visitor tracking)
        Lead::factory(5)->create();
        Lead::factory(2)->won()->create();
        Lead::factory(1)->lost()->create();
    }
}
