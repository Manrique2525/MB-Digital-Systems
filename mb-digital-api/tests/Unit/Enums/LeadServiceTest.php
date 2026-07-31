<?php

use App\Enums\LeadService;

it('maps plan names to service interests', function (?string $plan, ?LeadService $expected) {
    expect(LeadService::fromPlan($plan))->toBe($expected);
})->with([
    'página web' => ['Página Web', LeadService::PaginaWeb],
    'página' => ['Página', LeadService::PaginaWeb],
    'landing' => ['Landing Page', LeadService::PaginaWeb],
    'web' => ['Web Corporativa', LeadService::PaginaWeb],
    'ecommerce' => ['E-commerce', LeadService::Ecommerce],
    'e-commerce' => ['E-Commerce Básico', LeadService::Ecommerce],
    'tienda' => ['Tienda en línea', LeadService::Ecommerce],
    'sistema' => ['Sistema a Medida', LeadService::SistemaAMedida],
    'sistema a medida' => ['Sistema a medida', LeadService::SistemaAMedida],
    'seo' => ['Plan SEO', LeadService::MarketingDigital],
    'redes' => ['Plan Redes Sociales', LeadService::MarketingDigital],
    'pauta' => ['Pauta publicitaria', LeadService::MarketingDigital],
    'marketing' => ['Marketing Digital', LeadService::MarketingDigital],
    'diseño' => ['Diseño y Branding', LeadService::Diseno],
    'branding' => ['Branding', LeadService::Diseno],
    'sin coincidencia' => ['Proyecto Especial', null],
    'sin plan' => [null, null],
    'case insensitive' => ['E-COMMERCE', LeadService::Ecommerce],
]);

it('returns null for an empty plan', function () {
    expect(LeadService::fromPlan(''))->toBeNull();
});
