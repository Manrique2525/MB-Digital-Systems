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
            <td style="background:linear-gradient(135deg,#1E40AF,#3B82F6 50%,#8B5CF6);padding:36px 40px;text-align:center;">
              <h1 style="color:#fff;font-size:28px;font-weight:800;margin:0;letter-spacing:-0.5px;">
                🎯 Nuevo Lead
              </h1>
              <p style="color:rgba(255,255,255,0.85);font-size:16px;margin:10px 0 0;font-weight:400;">
                {{ $lead->source->label() }}
              </p>
            </td>
          </tr>

          {{-- Lead Data --}}
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                @foreach([
                  ['label' => 'Nombre', 'value' => $lead->name],
                  ['label' => 'Email', 'value' => $lead->email ?? '—', 'link' => $lead->email ? "mailto:{$lead->email}" : null],
                  ['label' => 'Teléfono', 'value' => $lead->phone ?? '—', 'link' => $lead->phone ? "tel:{$lead->phone}" : null],
                  ['label' => 'Fuente', 'value' => $lead->source->label()],
                  ['label' => 'Fecha', 'value' => $lead->created_at->format('d/m/Y H:i')],
                  ['label' => 'Mensaje', 'value' => $lead->message ?? '—'],
                ] as $field)
                <tr>
                  <td style="padding:6px 0;width:120px;vertical-align:top;">
                    <span style="color:#64748B;font-size:13px;font-weight:600;">{{ $field['label'] }}</span>
                  </td>
                  <td style="padding:6px 0;">
                    @if(isset($field['link']))
                      <a href="{{ $field['link'] }}" style="color:#0F172A;font-size:14px;font-weight:500;text-decoration:none;">
                        {{ $field['value'] }}
                      </a>
                    @else
                      <span style="color:#0F172A;font-size:14px;font-weight:500;">{{ $field['value'] }}</span>
                    @endif
                  </td>
                </tr>
                @endforeach
              </table>

              {{-- Timeline --}}
              @if(count($timeline) > 0)
                <hr style="border:none;border-top:1px solid #E2E8F0;margin:28px 0;">
                <h3 style="font-size:14px;color:#3B82F6;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:1.5px;">
                  📊 Actividad antes de convertir
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  @foreach($timeline as $entry)
                  <tr>
                    <td style="padding:3px 0;width:50px;">
                      <span style="color:#94A3B8;font-size:11px;font-family:monospace;">{{ $entry['time'] }}</span>
                    </td>
                    <td style="padding:3px 0;">
                      <span style="font-size:13px;">{{ $entry['icon'] }}</span>
                      <span style="color:#334155;font-size:13px;margin-left:6px;">{{ $entry['label'] }}</span>
                    </td>
                  </tr>
                  @endforeach
                </table>
              @endif
            </td>
          </tr>

          {{-- CTAs --}}
          <tr>
            <td style="padding:0 40px 36px;">
              <table width="100%" cellpadding="0" cellspacing="10">
                <tr>
                  <td align="center">
                    <a href="{{ config('app.url') }}/panel/leads/{{ $lead->id }}"
                       style="display:inline-block;background:linear-gradient(135deg,#3B82F6,#1E40AF);color:#fff;text-decoration:none;padding:14px 32px;border-radius:100px;font-weight:700;font-size:15px;">
                      👁 Ver en Panel
                    </a>
                    <a href="https://wa.me/529931782620?text=Hola%20{{ urlencode($lead->name) }}%20vi%20que%20solicitaste%20información%20en%20nuestra%20página%20web"
                       style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:14px 32px;border-radius:100px;font-weight:700;font-size:15px;margin:8px 0 0 10px;">
                      💬 WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {{-- Footer --}}
          <tr>
            <td style="padding:24px 40px;background:#F8FAFF;text-align:center;">
              <p style="color:#94A3B8;font-size:12px;margin:0;">
                MB Digital Systems — Villahermosa, Tabasco<br>
                <a href="{{ config('app.url') }}/panel" style="color:#3B82F6;text-decoration:none;">Ir al panel</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
