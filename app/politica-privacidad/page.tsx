import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1120",
        padding: "clamp(80px,12vw,120px) 20px clamp(40px,6vw,80px)",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          color: "#CBD5E1",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#3B82F6",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 32,
          }}
        >
          ← Volver al inicio
        </Link>

        <h1
          style={{
            fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 24px",
            lineHeight: 1.2,
          }}
        >
          Política de Privacidad
        </h1>

        <p style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
          Última actualización: Julio 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, fontSize: 15, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              1. Información que recopilamos
            </h2>
            <p style={{ margin: 0 }}>
              Recopilamos información que usted nos proporciona directamente a través de nuestro
              formulario de contacto: nombre, correo electrónico, asunto y mensaje. También
              recopilamos datos de navegación a través de cookies (Google Analytics, Meta Pixel)
              como dirección IP, tipo de navegador y páginas visitadas.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              2. Uso de la información
            </h2>
            <p style={{ margin: 0 }}>
              Utilizamos su información para: responder a sus consultas y solicitudes de
              cotización, enviar información sobre nuestros servicios, mejorar nuestro sitio web
              y servicios, y enviar comunicaciones de marketing si usted ha dado su
              consentimiento.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              3. Cookies
            </h2>
            <p style={{ margin: 0 }}>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el
              tráfico del sitio y personalizar el contenido. Puede gestionar sus preferencias de
              cookies a través del banner de consentimiento que aparece en nuestro sitio.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              4. Protección de datos
            </h2>
            <p style={{ margin: 0 }}>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su
              información personal contra acceso no autorizado, alteración, divulgación o
              destrucción. Sus datos se almacenan en servidores seguros y se transmiten mediante
              conexión cifrada (SSL/TLS).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              5. Sus derechos (LFPDPPP)
            </h2>
            <p style={{ margin: 0 }}>
              De conformidad con la Ley Federal de Protección de Datos Personales en Posesión
              de los Particulares (LFPDPPP), usted tiene derecho a: acceder a sus datos
              personales, rectificarlos si son inexactos, cancelarlos cuando considere que no
              están siendo utilizados conforme a los principios y deberes establecidos, u oponerse
              a su tratamiento para fines específicos.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
              6. Contacto
            </h2>
            <p style={{ margin: 0 }}>
              Para ejercer sus derechos de acceso, rectificación, cancelación u oposición (ARCO),
              puede contactarnos a través de nuestro formulario de contacto o vía WhatsApp al
              +52 993 178 2620.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
