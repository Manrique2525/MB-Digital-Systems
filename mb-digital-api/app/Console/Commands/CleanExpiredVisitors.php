<?php

namespace App\Console\Commands;

use App\Models\LeadEvent;
use App\Models\PageView;
use App\Models\Setting;
use App\Models\Visitor;
use Illuminate\Console\Command;

class CleanExpiredVisitors extends Command
{
    protected $signature = 'tracking:clean-expired';

    protected $description = 'Elimina visitantes y datos de tracking anteriores a X días';

    public function handle(): int
    {
        $days = Setting::int('cleanup_days', (int) config('tracking.cleanup_days', 90));
        $cutoff = now()->subDays($days);

        $visitorIds = Visitor::where('last_seen_at', '<', $cutoff)
            ->whereDoesntHave('lead')
            ->pluck('id');

        $pageViewsDeleted = PageView::whereIn('visitor_id', $visitorIds)->delete();
        $eventsDeleted = LeadEvent::whereIn('visitor_id', $visitorIds)->delete();
        $visitorsDeleted = Visitor::whereIn('id', $visitorIds)->delete();

        $this->info("Limpiados {$visitorsDeleted} visitantes, {$pageViewsDeleted} page views, {$eventsDeleted} eventos");

        return Command::SUCCESS;
    }
}
