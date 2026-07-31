<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Visitor extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'ip',
        'user_agent',
        'referrer',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'first_page',
        'page_views_count',
        'first_seen_at',
        'last_seen_at',
    ];

    protected function casts(): array
    {
        return [
            'page_views_count' => 'integer',
            'first_seen_at' => 'datetime',
            'last_seen_at' => 'datetime',
        ];
    }

    public function pageViews(): HasMany
    {
        return $this->hasMany(PageView::class);
    }

    public function events(): HasMany
    {
        return $this->hasMany(LeadEvent::class);
    }

    public function lead(): HasOne
    {
        return $this->hasOne(Lead::class);
    }

    public function scopeOnline($query)
    {
        return $query->where('last_seen_at', '>=', now()->subMinutes(5));
    }

    public function scopeWithTimeline($query)
    {
        return $query->with(['pageViews', 'events']);
    }

    public static function firstOrCreateBySession(string $sessionId, array $data = []): self
    {
        return static::firstOrCreate(
            ['session_id' => $sessionId],
            [
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'referrer' => $data['referrer'] ?? null,
                'first_page' => $data['url'] ?? null,
                'first_seen_at' => now(),
                'last_seen_at' => now(),
            ]
        );
    }
}
