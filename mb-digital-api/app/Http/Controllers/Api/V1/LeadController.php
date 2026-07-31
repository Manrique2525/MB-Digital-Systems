<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\Lead\StoreLeadAction;
use App\Enums\LeadSource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Lead\StoreLeadRequest;
use App\Http\Resources\LeadResource;
use Illuminate\Http\JsonResponse;

class LeadController extends Controller
{
    public function __construct(
        private readonly StoreLeadAction $storeLead,
    ) {}

    public function store(StoreLeadRequest $request): JsonResponse
    {
        $data = $request->validated();

        $lead = ($this->storeLead)(
            name: $data['name'],
            source: LeadSource::from($data['source']),
            email: $data['email'] ?? null,
            phone: $data['phone'] ?? null,
            message: $data['message'],
            service: $data['service'] ?? null,
            sessionId: $data['session_id'] ?? null,
        );

        return response()->json([
            'success' => true,
            'data' => new LeadResource($lead),
        ], 201);
    }
}
