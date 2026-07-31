<?php

use App\Actions\Tracking\TrackPageViewAction;
use App\Models\Visitor;

it('creates a page view record', function () {
    $visitor = Visitor::factory()->create(['page_views_count' => 0]);
    $action = app(TrackPageViewAction::class);

    $pageView = ($action)(
        visitor: $visitor,
        url: '/servicios',
        title: 'Servicios',
        referrer: null,
    );

    expect($pageView->visitor_id)->toBe($visitor->id);
    expect($pageView->url)->toBe('/servicios');
    expect($pageView->title)->toBe('Servicios');
});

it('increments visitor page_views_count', function () {
    $visitor = Visitor::factory()->create(['page_views_count' => 5]);
    $action = app(TrackPageViewAction::class);

    ($action)(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: null,
    );

    expect($visitor->fresh()->page_views_count)->toBe(6);
});

it('updates last_seen_at timestamp', function () {
    $visitor = Visitor::factory()->create([
        'last_seen_at' => now()->subDay(),
    ]);
    $action = app(TrackPageViewAction::class);

    ($action)(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: 'https://google.com',
    );

    expect($visitor->fresh()->last_seen_at->isToday())->toBeTrue();
});

it('dedupes the same url within 30 seconds', function () {
    $visitor = Visitor::factory()->create(['page_views_count' => 0]);
    $action = app(TrackPageViewAction::class);

    $first = ($action)(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: null,
    );

    $second = ($action)(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: null,
    );

    expect($second->id)->toBe($first->id);
    expect($visitor->fresh()->page_views_count)->toBe(1);
    expect($visitor->pageViews()->count())->toBe(1);
});

it('tracks the same url again after 30 seconds', function () {
    $this->travelTo(now()->startOfDay());

    $visitor = Visitor::factory()->create(['page_views_count' => 0]);
    $action = app(TrackPageViewAction::class);

    ($action)(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: null,
    );

    $this->travelTo(now()->addSeconds(31));

    $action(
        visitor: $visitor,
        url: '/',
        title: 'Inicio',
        referrer: null,
    );

    expect($visitor->fresh()->page_views_count)->toBe(2);
    expect($visitor->pageViews()->count())->toBe(2);
});
