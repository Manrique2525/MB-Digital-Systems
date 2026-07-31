<?php

namespace App\Enums;

enum LeadService: string
{
    case PaginaWeb = 'pagina_web';
    case Ecommerce = 'ecommerce';
    case SistemaAMedida = 'sistema_a_medida';
    case MarketingDigital = 'marketing_digital';
    case Diseno = 'diseno';
    case Otro = 'otro';

    public function label(): string
    {
        return match ($this) {
            self::PaginaWeb => 'Página Web',
            self::Ecommerce => 'E-commerce',
            self::SistemaAMedida => 'Sistema a Medida',
            self::MarketingDigital => 'Marketing Digital',
            self::Diseno => 'Diseño',
            self::Otro => 'No estoy seguro',
        };
    }

    public static function fromPlan(?string $plan): ?self
    {
        if (! $plan) {
            return null;
        }

        $normalized = strtolower(trim($plan));

        return match (true) {
            str_contains($normalized, 'página'), str_contains($normalized, 'pagina'),
            str_contains($normalized, 'landing'), str_contains($normalized, 'web') => self::PaginaWeb,
            str_contains($normalized, 'e-commerce'), str_contains($normalized, 'ecommerce'),
            str_contains($normalized, 'tienda') => self::Ecommerce,
            str_contains($normalized, 'sistema') => self::SistemaAMedida,
            str_contains($normalized, 'seo'), str_contains($normalized, 'redes'),
            str_contains($normalized, 'pauta'), str_contains($normalized, 'funnel'),
            str_contains($normalized, 'marketing') => self::MarketingDigital,
            str_contains($normalized, 'diseño'), str_contains($normalized, 'diseno'),
            str_contains($normalized, 'branding') => self::Diseno,
            default => null,
        };
    }
}
