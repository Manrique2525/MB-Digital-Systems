<div class="mb-login">
    {{ \Filament\Support\Facades\FilamentView::renderHook(\Filament\View\PanelsRenderHook::AUTH_LOGIN_FORM_BEFORE, scopes: $this->getRenderHookScopes()) }}

    <div class="mb-login-header">
        <div class="mb-login-logo">
            <span class="mb-login-logo-mark">MB</span>
            <div class="mb-login-logo-text">
                <span class="mb-login-logo-name">MB Digital Systems</span>
                <span class="mb-login-logo-tag">Panel Admin</span>
            </div>
        </div>

        <h1 class="mb-login-title">{{ $this->getHeading() }}</h1>
        <p class="mb-login-subtitle">Accede a tu panel de administración</p>
    </div>

    <x-filament-panels::form id="form" wire:submit="authenticate">
        {{ $this->form }}

        <button type="submit" class="mb-login-btn">
            <span wire:loading.remove wire:target="authenticate">Iniciar sesión</span>
            <span wire:loading wire:target="authenticate" class="mb-login-btn-loading">
                <x-filament::loading-indicator class="mb-login-btn-spinner" />
                Ingresando...
            </span>
        </button>
    </x-filament-panels::form>

    {{ \Filament\Support\Facades\FilamentView::renderHook(\Filament\View\PanelsRenderHook::AUTH_LOGIN_FORM_AFTER, scopes: $this->getRenderHookScopes()) }}

    <p class="mb-login-footer">Sistema de administración interno &middot; MB Digital Systems</p>

    <x-filament-actions::modals />
</div>
