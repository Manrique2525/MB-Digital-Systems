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

          <tr>
            <td style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);padding:36px 40px;text-align:center;">
              <h1 style="color:#fff;font-size:26px;font-weight:800;margin:0;letter-spacing:-0.5px;">
                ¿Seguimos con tu proyecto?
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <p style="color:#334155;font-size:16px;line-height:1.7;margin:0 0 20px;">
                Hola <strong style="color:#0F172A;">{{ $lead->name }}</strong>,
              </p>
              <p style="color:#334155;font-size:16px;line-height:1.7;margin:0 0 20px;">
                Hace unos días nos escribiste interesado en nuestros servicios.
                Queremos asegurarnos de que recibiste toda la información y resolver
                cualquier duda que tengas.
              </p>

              <div style="background:linear-gradient(135deg,#EFF6FF,#EDE9FE);border-radius:16px;padding:24px;margin:24px 0;">
                <h3 style="color:#1E40AF;font-size:15px;font-weight:700;margin:0 0 12px;">
                  🚀 Recordatorio
                </h3>
                <table cellpadding="6" style="color:#334155;font-size:14px;">
                  <tr><td>🎨</td><td>Diseño moderno adaptado a tu marca</td></tr>
                  <tr><td>📱</td><td>Se ve perfecto en celular, tablet y PC</td></tr>
                  <tr><td>💬</td><td>Botón de WhatsApp para vender directo</td></tr>
                  <tr><td>🔍</td><td>Aparece en búsquedas de Google</td></tr>
                </table>
              </div>

              <p style="color:#64748B;font-size:14px;line-height:1.6;margin:24px 0 0;">
                Si ya no estás interesado, solo responde este correo y lo dejamos aquí.
                Sin presión, sin spam. 🙌
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 40px;text-align:center;">
              <a href="https://wa.me/529931782620?text=Hola%20MB%20Digital,%20soy%20{{ urlencode($lead->name) }}%20y%20sigo%20interesado%20en%20una%20página%20web"
                 style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:14px 36px;border-radius:100px;font-weight:700;font-size:16px;">
                💬 Sí, hablemos por WhatsApp
              </a>
            </td>
          </tr>

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
