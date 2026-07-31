<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'value',
    ];

    public static function get(string $key, mixed $default = null): mixed
    {
        return static::query()->where('key', $key)->value('value') ?? $default;
    }

    public static function set(string $key, mixed $value): void
    {
        static::query()->updateOrCreate(
            ['key' => $key],
            ['value' => is_array($value) ? json_encode($value) : $value],
        );
    }

    public static function int(string $key, int $default): int
    {
        return (int) static::get($key, $default);
    }

    public static function string(string $key, string $default): string
    {
        return (string) static::get($key, $default);
    }
}
