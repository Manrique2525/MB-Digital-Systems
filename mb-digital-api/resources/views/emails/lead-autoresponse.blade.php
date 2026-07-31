<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#F8FAFF;font-family:'Segoe UI',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:40px 20px;">
        <table align="center" width="600" cellpadding="0" cellspacing="0"
               style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08);">

          {{-- Header --}}
          <tr>
            <td style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);padding:36px 40px;text-align:center;">
              <h1 style="color:#fff;font-size:28px;font-weight:800;margin:0;letter-spacing:-0.5px;">
                ¡Gracias por contactarnos!
              </h1>
            </td>
          </tr>

          {{-- Body --}}
          <tr>
            <td style="padding:40px;">
              <p style="color:#334155;font-size:16px;line-height:1.7;margin:0 0 20px;">
                Hola <strong style="color:#0F172A;">{{ $lead->name }}</strong>,
              </p>
              <p style="color:#334155;font-size:16px;line-height:1.7;margin:0 0 20px;">
                Hemos recibido tu solicitud y nuestro equipo la revisará en las próximas
                <strong>24 horas hábiles</strong>. Te contactaremos al
                <strong>{{ $lead->phone ?? 'número que proporcionaste' }}</strong>
                para darte una cotización personalizada.
              </p>

              <div style="background:linear-gradient(135deg,#EFF6FF,#EDE9FE);border-radius:16px;padding:24px;margin:24px 0;">
                <h3 style="color:#1E40AF;font-size:15px;font-weight:700;margin:0 0 12px;">
                  ⚡ Mientras tanto:
                </h3>
                <table cellpadding="6" style="color:#334155;font-size:14px;">
                  <tr><td>✅</td><td>Define los colores y estilo que te gustan para tu página</td></tr>
                  <tr><td>✅</td><td>Reúne fotos de tu negocio o productos</td></tr>
                  <tr><td>✅</td><td>Piensa en qué secciones necesita tu web</td></tr>
                </table>
              </div>

              <p style="color:#64748B;font-size:14px;line-height:1.6;margin:24px 0 0;">
                ¿Urgente? Escríbenos directo por WhatsApp y te respondemos en
                <strong>menos de 1 hora</strong>.
              </p>
            </td>
          </tr>

          {{-- CTA --}}
          <tr>
            <td style="padding:0 40px 40px;text-align:center;">
              <a href="https://wa.me/529931782620?text=Hola%20MB%20Digital,%20soy%20{{ urlencode($lead->name) }}%20y%20escribo%20por%20lo%20de%20la%20cotización"
                 style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:14px 36px;border-radius:100px;font-weight:700;font-size:16px;">
                💬 Hablar por WhatsApp
              </a>
            </td>
          </tr>

          {{-- Footer --}}
          <tr>
            <td style="padding:24px 40px;background:#F8FAFF;text-align:center;">
              <p style="color:#94A3B8;font-size:12px;margin:0;">
                MB Digital Systems — Villahermosa, Tabasco<br>
                <span style="color:#64748B;">Respuesta garantizada en menos de 24 horas</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
