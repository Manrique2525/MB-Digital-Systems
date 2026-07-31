<?php

namespace App\Models;

use App\Enums\LeadService;
use App\Enums\LeadSource;
use App\Enums\LeadStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'visitor_id',
        'name',
        'email',
        'phone',
        'message',
        'service',
        'source',
        'status',
        'rating',
        'notes',
        'contacted_at',
        'followup_sent_at',
    ];

    protected function casts(): array
    {
        return [
            'status' => LeadStatus::class,
            'source' => LeadSource::class,
            'service' => LeadService::class,
            'rating' => 'integer',
            'contacted_at' => 'datetime',
            'followup_sent_at' => 'datetime',
        ];
    }

    public function visitor(): BelongsTo
    {
        return $this->belongsTo(Visitor::class);
    }

    public function notes(): HasMany
    {
        return $this->hasMany(LeadNote::class);
    }

    public function reminders(): HasMany
    {
        return $this->hasMany(Reminder::class);
    }

    public function scopeByStatus($query, LeadStatus $status)
    {
        return $query->where('status', $status);
    }

    public function scopeNew($query)
    {
        return $query->byStatus(LeadStatus::New);
    }

    public function scopeToday($query)
    {
        return $query->whereDate('created_at', today());
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year);
    }

    public function scopePendingFollowup($query)
    {
        $hours = Setting::int('followup_hours', (int) config('tracking.followup_hours', 24));

        return $query->whereNotNull('email')
            ->whereNull('followup_sent_at')
            ->where('created_at', '<=', now()->subHours($hours))
            ->whereIn('status', [LeadStatus::New, LeadStatus::Contacted]);
    }

    public function markAsContacted(): void
    {
        $this->transitionStatus(
            LeadStatus::Contacted,
            'Marcado como Contactado',
        );
    }

    public function transitionStatus(LeadStatus $status, ?string $note = null): void
    {
        $updates = ['status' => $status];

        if ($status === LeadStatus::Contacted && is_null($this->contacted_at)) {
            $updates['contacted_at'] = now();
        }

        $this->update($updates);

        if ($note) {
            $this->notes()->create([
                'note' => $note,
                'created_by' => 'Sistema',
            ]);
        }
    }
}
