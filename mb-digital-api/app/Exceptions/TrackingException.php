<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class TrackingException extends Exception
{
    public function __construct(string $message = 'Error al registrar tracking', int $code = 500)
    {
        parent::__construct($message, $code);
    }

    public function render(): JsonResponse
    {
        return response()->json([
            'error' => 'tracking_error',
            'message' => $this->getMessage(),
        ], $this->getCode());
    }
}
