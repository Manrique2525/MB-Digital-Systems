import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildHtml(name: string, email: string, subject: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3B82F6,#1E40AF);border-radius:20px 20px 0 0;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                MB Digital Systems
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">
                Nuevo mensaje desde tu sitio web
              </p>
            </td>
          </tr>
          <!-- Badge -->
          <tr>
            <td style="background:#3B82F6;padding:0 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="background:rgba(255,255,255,0.15);border-radius:100px;padding:8px 20px;display:inline-block;">
                      <span style="color:#fff;font-size:13px;font-weight:600;">
                        ✉️ Formulario de Contacto
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:#fff;padding:40px;border:1px solid #E2E8F0;border-top:none;">
              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                      Nombre
                    </p>
                    <p style="margin:0;font-size:16px;color:#0F172A;font-weight:600;">
                      ${name}
                    </p>
                  </td>
                </tr>
              </table>
              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                      Email
                    </p>
                    <p style="margin:0;font-size:16px;color:#3B82F6;font-weight:600;">
                      <a href="mailto:${email}" style="color:#3B82F6;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>
              <!-- Subject -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                      Asunto
                    </p>
                    <p style="margin:0;font-size:16px;color:#0F172A;font-weight:600;">
                      ${subject || "Sin asunto"}
                    </p>
                  </td>
                </tr>
              </table>
              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="border-top:1px solid #E2E8F0;"></td>
                </tr>
              </table>
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                      Mensaje
                    </p>
                    <div style="background:#F8FAFF;border:1px solid #E8F0FE;border-radius:12px;padding:20px;">
                      <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFF;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 20px 20px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748B;">
                Este mensaje fue enviado desde el formulario de contacto de
              </p>
              <p style="margin:0;font-size:14px;color:#3B82F6;font-weight:700;">
                mbdigitalsystems.com
              </p>
              <p style="margin:12px 0 0;font-size:12px;color:#94A3B8;">
                Responde directamente a este correo para contactar al cliente.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

const handler = async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const html = buildHtml(name, email, subject || "", message);

    await resend.emails.send({
      from: "MB Digital Systems <onboarding@resend.dev>",
      to: ["miguelangelreyesortiz25@gmail.com"],
      replyTo: email,
      subject: subject || `Nuevo mensaje de ${name}`,
      html,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Error al enviar el correo" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export default handler;
