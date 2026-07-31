<x-filament-panels::page>
    <x-filament-panels::form wire:submit="save">
        {{ $this->form }}

        <div style="margin-top:24px;">
            <x-filament::button type="submit" color="primary" icon="heroicon-o-check">
                Guardar ajustes
            </x-filament::button>
        </div>
    </x-filament-panels::form>
</x-filament-panels::page>
