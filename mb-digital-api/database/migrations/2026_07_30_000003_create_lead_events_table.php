<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lead_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('visitor_id')->constrained()->cascadeOnDelete();
            $table->string('event_type', 50)->index();
            $table->string('section', 100)->nullable();
            $table->json('meta')->nullable();
            $table->timestamp('created_at')->index();

            $table->index(['visitor_id', 'event_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lead_events');
    }
};
