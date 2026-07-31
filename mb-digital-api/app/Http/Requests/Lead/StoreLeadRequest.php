<?php

namespace App\Http\Requests\Lead;

use App\Enums\LeadService;
use App\Enums\LeadSource;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'session_id' => ['sometimes', 'nullable', 'string', 'max:64'],
            'name' => ['required', 'string', 'max:200'],
            'email' => ['required', 'email:filter', 'max:255'],
            'phone' => ['sometimes', 'nullable', 'string', 'max:50'],
            'message' => ['required', 'string', 'max:5000'],
            'service' => ['sometimes', 'nullable', 'string', new Enum(LeadService::class)],
            'source' => ['required', 'string', new Enum(LeadSource::class)],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre es obligatorio',
            'name.max' => 'El nombre no puede exceder 200 caracteres',
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email no es válido',
            'message.required' => 'El mensaje es obligatorio',
            'message.max' => 'El mensaje no puede exceder 5000 caracteres',
            'service.Illuminate\Validation\Rules\Enum' => 'El servicio no es válido',
            'source.required' => 'La fuente es obligatoria',
            'source.Illuminate\Validation\Rules\Enum' => 'La fuente no es válida',
        ];
    }
}
