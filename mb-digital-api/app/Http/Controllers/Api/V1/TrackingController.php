<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\Tracking\TrackEventAction;
use App\Actions\Tracking\TrackPageViewAction;
use App\Enums\EventType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Tracking\TrackEventRequest;
use App\Http\Requests\Tracking\TrackPageViewRequest;
use App\Models\Visitor;
use Illuminate\Http\JsonResponse;

class TrackingController extends Controller
{
    public function __construct(
        private readonly TrackPageViewAction $trackPageView,
        private readonly TrackEventAction $trackEvent,
    ) {}

    public function page(TrackPageViewRequest $request): JsonResponse
    {
        $data = $request->validated();

        $visitor = Visitor::firstOrCreateBySession($data['session_id'], $data);

        ($this->trackPageView)(
            visitor: $visitor,
            url: $data['url'],
            title: $data['title'] ?? null,
            referrer: $data['referrer'] ?? null,
        );

        return response()->json([
            'success' => true,
            'visitor_id' => $visitor->id,
        ], 201);
    }

    public function event(TrackEventRequest $request): JsonResponse
    {
        $data = $request->validated();

        $visitor = Visitor::firstOrCreateBySession($data['session_id'], $data);

        ($this->trackEvent)(
            visitor: $visitor,
            eventType: EventType::from($data['event_type']),
            section: $data['section'] ?? null,
            meta: $data['meta'] ?? [],
        );

        return response()->json([
            'success' => true,
            'visitor_id' => $visitor->id,
        ], 201);
    }
}
