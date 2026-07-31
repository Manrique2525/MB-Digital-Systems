<?php

namespace App\Http\Requests\Tracking;

use App\Enums\EventType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class TrackEventRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'session_id' => ['required', 'string', 'max:64'],
            'event_type' => ['required', 'string', new Enum(EventType::class)],
            'section' => ['sometimes', 'nullable', 'string', 'max:100'],
            'meta' => ['sometimes', 'nullable', 'array'],
        ];
    }
}
