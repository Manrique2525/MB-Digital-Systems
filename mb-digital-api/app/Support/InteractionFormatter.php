<?php

namespace App\Support;

use App\Enums\EventType;

class InteractionFormatter
{
    public static function label(string $eventType): string
    {
        return EventType::tryFrom($eventType)?->label() ?? $eventType;
    }

    public static function icon(string $eventType): string
    {
        return match ($eventType) {
            'wa_click' => '💬',
            'pricing_view' => '💰',
            'portfolio_view' => '🖼️',
            'hero_cta' => '🎯',
            'form_start' => '✍️',
            'form_submit' => '📝',
            'project_click' => '🔗',
            'service_click' => '🧩',
            'nav_click' => '🧭',
            default => '👆',
        };
    }

    public static function section(?string $section): ?string
    {
        if (! $section) {
            return null;
        }

        $known = [
            'inicio' => 'Inicio',
            'servicios' => 'Servicios',
            'precios' => 'Precios',
            'proyectos' => 'Proyectos',
            'contacto' => 'Contacto',
            'contact' => 'Contacto',
            'whatsapp-float' => 'WhatsApp flotante',
            'nosotros' => 'Nosotros',
            'por-que' => 'Por qué',
            'faq' => 'FAQ',
            'testimonios' => 'Testimonios',
            'marketing' => 'Marketing',
        ];

        return $known[$section] ?? $section;
    }

    public static function description(?string $section, ?array $meta = null): string
    {
        $sectionLabel = self::section($section) ?? 'Sin sección específica';

        if (isset($meta['plan']) && $meta['plan']) {
            return "{$meta['plan']} — {$sectionLabel}";
        }

        return $sectionLabel;
    }
}
