<?php

namespace App\Enums;

enum LeadStatus: string
{
    case New = 'new';
    case Contacted = 'contacted';
    case Qualified = 'qualified';
    case Proposal = 'proposal';
    case Won = 'won';
    case Lost = 'lost';

    public function label(): string
    {
        return match ($this) {
            self::New => 'Nuevo',
            self::Contacted => 'Contactado',
            self::Qualified => 'Calificado',
            self::Proposal => 'Cotización',
            self::Won => 'Ganado',
            self::Lost => 'Perdido',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::New => '#3B82F6',
            self::Contacted => '#8B5CF6',
            self::Qualified => '#F59E0B',
            self::Proposal => '#F97316',
            self::Won => '#10B981',
            self::Lost => '#EF4444',
        };
    }
}
