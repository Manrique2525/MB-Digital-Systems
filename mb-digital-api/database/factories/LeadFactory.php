<?php

namespace Database\Factories;

use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    protected $model = Lead::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->numerify('993#######'),
            'message' => $this->faker->paragraph(),
            'source' => $this->faker->randomElement(LeadSource::cases()),
            'status' => LeadStatus::New,
        ];
    }

    public function won(): static
    {
        return $this->state(fn () => ['status' => LeadStatus::Won]);
    }

    public function lost(): static
    {
        return $this->state(fn () => ['status' => LeadStatus::Lost]);
    }

    public function fromMagnet(): static
    {
        return $this->state(fn () => ['source' => LeadSource::LeadMagnet]);
    }
}
