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
            'wa_click' => 'heroicon-o-chat-bubble-oval-left-ellipsis',
            'pricing_view' => 'heroicon-o-banknotes',
            'portfolio_view' => 'heroicon-o-photo',
            'hero_cta' => 'heroicon-o-arrow-trending-up',
            'form_start' => 'heroicon-o-pencil-square',
            'form_submit' => 'heroicon-o-paper-airplane',
            'project_click' => 'heroicon-o-link',
            'service_click' => 'heroicon-o-puzzle-piece',
            'nav_click' => 'heroicon-o-map',
            default => 'heroicon-o-cursor-arrow-rays',
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
