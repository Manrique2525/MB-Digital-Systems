<?php

namespace App\Enums;

enum LeadSource: string
{
    case ContactForm = 'contact_form';
    case LeadMagnet = 'lead_magnet';
    case WhatsApp = 'whatsapp';
    case Referral = 'referral';
    case Landing = 'landing';

    public function label(): string
    {
        return match ($this) {
            self::ContactForm => 'Formulario de Contacto',
            self::LeadMagnet => 'Auditoría Gratuita',
            self::WhatsApp => 'WhatsApp Directo',
            self::Referral => 'Referido',
            self::Landing => 'Landing Page',
        };
    }
}
