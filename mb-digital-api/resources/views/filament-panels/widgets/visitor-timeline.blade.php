<x-filament::section>
    <x-slot name="heading">
        <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:20px;">🧭</span>
            <span style="font-family:var(--font-sora),system-ui,sans-serif;font-weight:700;color:#1E293B;">
                Historial del visitante
            </span>
        </div>
    </x-slot>

    @php $timelineEntries = $this->getTimeline(); @endphp

    <div style="position:relative;padding-left:28px;">
        <div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#3B82F6,#8B5CF6);border-radius:2px;"></div>

        @forelse($timelineEntries as $entry)
            <div style="position:relative;margin-bottom:20px;padding-left:20px;">
                <div style="position:absolute;left:-24px;top:2px;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #3B82F6;display:flex;align-items:center;justify-content:center;font-size:10px;">
                    <span>{{ $entry['icon'] }}</span>
                </div>

                <div style="display:flex;gap:12px;align-items:flex-start;">
                    <span style="font-size:11px;color:#94A3B8;font-family:monospace;white-space:nowrap;margin-top:2px;min-width:42px;">
                        {{ $entry['time'] }}
                    </span>
                    <div style="min-width:0;max-width:100%;">
                        <div style="font-size:14px;font-weight:600;color:#0F172A;overflow-wrap:anywhere;">
                            {{ $entry['icon'] }} {{ $entry['title'] }}
                        </div>
                        @if($entry['description'] ?? false)
                            <div style="font-size:13px;color:#64748B;margin-top:2px;overflow-wrap:anywhere;word-break:break-word;">
                                {{ $entry['description'] }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        @empty
            <div style="text-align:center;padding:32px 0;color:#94A3B8;font-size:14px;">
                No hay actividad registrada para este visitante.
            </div>
        @endforelse
    </div>
</x-filament::section>
