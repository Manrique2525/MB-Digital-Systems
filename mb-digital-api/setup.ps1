# MB Digital Systems - API Setup Script
# Ejecutar en PowerShell como administrador

Write-Host "🚀 Instalando MB Digital Systems API..." -ForegroundColor Cyan

# 1. Verificar requisitos
$phpVersion = php -v 2>$null
if (-not $phpVersion) {
    Write-Host "❌ PHP no está instalado. Instala PHP 8.3+ desde https://windows.php.net" -ForegroundColor Red
    exit 1
}

$composerVersion = composer --version 2>$null
if (-not $composerVersion) {
    Write-Host "❌ Composer no está instalado. Descárgalo desde https://getcomposer.org" -ForegroundColor Red
    exit 1
}

Write-Host "✅ PHP y Composer detectados" -ForegroundColor Green

# 2. Crear proyecto Laravel
$projectDir = "mb-digital-api"
if (-not (Test-Path $projectDir)) {
    Write-Host "📦 Creando proyecto Laravel..." -ForegroundColor Yellow
    composer create-project laravel/laravel $projectDir --prefer-dist
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error al crear proyecto Laravel" -ForegroundColor Red
        exit 1
    }
}

Set-Location $projectDir

# 3. Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
composer require filament/filament "^3.2"
composer require laravel/sanctum "^4.0"

# 4. Instalar dependencias de desarrollo
composer require --dev pestphp/pest "^3.0"
composer require --dev pestphp/pest-plugin-laravel "^3.0"
composer require --dev pestphp/pest-plugin-faker "^3.0"
composer require --dev laravel/pint "^1.18"
composer require --dev phpstan/phpstan "^1.12"

# 5. Publicar assets de Filament
php artisan filament:install --panels

# 6. Publicar assets de Sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# 7. Crear enlace simbólico storage
php artisan storage:link

# 8. Configurar archivo .env
Write-Host "⚙️  Configurando .env..." -ForegroundColor Yellow
Copy-Item .env.example .env -Force

# Preguntar datos de base de datos
$dbName = Read-Host "Nombre de base de datos (default: mb_digital)"
if (-not $dbName) { $dbName = "mb_digital" }

$dbUser = Read-Host "Usuario MySQL (default: root)"
if (-not $dbUser) { $dbUser = "root" }

$dbPass = Read-Host "Contraseña MySQL" -AsSecureString
$dbPassText = [System.Runtime.InteropServices.Marshal]::PtrToStringUni([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPass))

$adminEmail = Read-Host "Email para recibir notificaciones de leads (default: contacto@mbdigitalsystems.com)"
if (-not $adminEmail) { $adminEmail = "contacto@mbdigitalsystems.com" }

# Actualizar .env
(Get-Content .env) -replace 'DB_DATABASE=.*', "DB_DATABASE=$dbName" | Set-Content .env
(Get-Content .env) -replace 'DB_USERNAME=.*', "DB_USERNAME=$dbUser" | Set-Content .env
(Get-Content .env) -replace 'DB_PASSWORD=.*', "DB_PASSWORD=$dbPassText" | Set-Content .env
(Get-Content .env) -replace 'ADMIN_EMAIL=.*', "ADMIN_EMAIL=$adminEmail" | Set-Content .env

# 9. Generar key
php artisan key:generate

# 10. Crear base de datos y migrar
Write-Host "🗄️  Ejecutando migraciones..." -ForegroundColor Yellow
php artisan migrate

# 11. Crear admin user para Filament
Write-Host "👤 Creando usuario administrador..." -ForegroundColor Yellow
php artisan make:filament-user

# 12. Ejecutar tests
Write-Host "🧪 Ejecutando tests..." -ForegroundColor Yellow
php artisan test --parallel

Write-Host ""
Write-Host "🎉 ¡Instalación completada!" -ForegroundColor Green
Write-Host ""
Write-Host "Panel admin: https://tu-dominio.com/panel" -ForegroundColor Cyan
Write-Host "API base:    https://tu-dominio.com/api/v1" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Para producción en IONOS:" -ForegroundColor Yellow
Write-Host "  1. Sube la carpeta 'mb-digital-api' a public_html/" -ForegroundColor White
Write-Host "  2. Apunta el DocumentRoot a public/" -ForegroundColor White
Write-Host "  3. Configura el cron para colas: * * * * * php /ruta/artisan queue:work --stop-when-empty" -ForegroundColor White
Write-Host "  4. Configura el cron para limpieza: 0 3 * * 0 php /ruta/artisan tracking:clean-expired" -ForegroundColor White
