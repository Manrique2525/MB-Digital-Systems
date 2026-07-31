<?php

namespace App\Actions\Tracking;

use App\Models\PageView;
use App\Models\Visitor;

class TrackPageViewAction
{
    public function __invoke(
        Visitor $visitor,
        string $url,
        ?string $title = null,
        ?string $referrer = null,
    ): PageView {
        $recent = $visitor->pageViews()
            ->where('url', $url)
            ->where('created_at', '>=', now()->subSeconds(30))
            ->latest()
            ->first();

        if ($recent) {
            $visitor->update(['last_seen_at' => now()]);

            return $recent;
        }

        $pageView = $visitor->pageViews()->create([
            'url' => $url,
            'title' => $title,
            'referrer' => $referrer,
            'created_at' => now(),
        ]);

        $visitor->increment('page_views_count');
        $visitor->update(['last_seen_at' => now()]);

        return $pageView;
    }
}
