<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class LeadStoreException extends Exception
{
    public function __construct(string $message = 'Error al guardar el lead', int $code = 500)
    {
        parent::__construct($message, $code);
    }

    public function render(): JsonResponse
    {
        return response()->json([
            'error' => 'lead_store_error',
            'message' => $this->getMessage(),
        ], $this->getCode());
    }
}
