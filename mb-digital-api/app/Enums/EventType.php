<?php

namespace App\Enums;

enum EventType: string
{
    case WAClick = 'wa_click';
    case PricingView = 'pricing_view';
    case PortfolioView = 'portfolio_view';
    case HeroCTA = 'hero_cta';
    case FormStart = 'form_start';
    case FormSubmit = 'form_submit';
    case ProjectClick = 'project_click';
    case ServiceClick = 'service_click';
    case NavClick = 'nav_click';

    public function label(): string
    {
        return match ($this) {
            self::WAClick => 'Clic en WhatsApp',
            self::PricingView => 'Vio Precios',
            self::PortfolioView => 'Vio Portafolio',
            self::HeroCTA => 'Clic Hero CTA',
            self::FormStart => 'Comenzó Formulario',
            self::FormSubmit => 'Envió Formulario',
            self::ProjectClick => 'Clic en Proyecto',
            self::ServiceClick => 'Clic en Servicio',
            self::NavClick => 'Navegación',
        };
    }
}
