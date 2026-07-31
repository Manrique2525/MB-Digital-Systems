<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();
            $table->string('session_id', 64)->unique()->index();
            $table->ipAddress('ip')->nullable();
            $table->text('user_agent')->nullable();
            $table->string('referrer', 2048)->nullable()->index();
            $table->string('utm_source', 100)->nullable();
            $table->string('utm_medium', 100)->nullable();
            $table->string('utm_campaign', 100)->nullable();
            $table->string('first_page', 2048)->nullable();
            $table->integer('page_views_count')->default(0);
            $table->timestamp('first_seen_at');
            $table->timestamp('last_seen_at');
            $table->timestamps();

            $table->index(['first_seen_at', 'last_seen_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('visitors');
    }
};
