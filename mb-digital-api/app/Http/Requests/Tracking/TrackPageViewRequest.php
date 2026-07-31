<?php

namespace App\Http\Requests\Tracking;

use Illuminate\Foundation\Http\FormRequest;

class TrackPageViewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'session_id' => ['required', 'string', 'max:64'],
            'url' => ['required', 'string', 'max:2048'],
            'title' => ['sometimes', 'nullable', 'string', 'max:500'],
            'referrer' => ['sometimes', 'nullable', 'string', 'max:2048'],
        ];
    }
}
