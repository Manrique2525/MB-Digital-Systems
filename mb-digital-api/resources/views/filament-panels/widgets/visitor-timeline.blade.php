<x-filament::section>
    <x-slot name="heading">
        <div class="flex items-center gap-2">
            <x-filament::icon icon="heroicon-o-globe-alt" class="h-5 w-5 text-primary-600" aria-hidden="true" />
            <span class="text-base font-bold tracking-tight">
                Historial del visitante
            </span>
        </div>
    </x-slot>

    @php $timelineEntries = $this->getTimeline(); @endphp

    <div class="relative">
        <div class="mb-timeline__line" aria-hidden="true"></div>

        <div class="relative z-10">
            @forelse($timelineEntries as $entry)
                <div class="mb-5 flex items-start gap-3">
                    <span class="mb-timeline__dot inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1">
                        <x-filament::icon :icon="$entry['icon']" class="h-3.5 w-3.5" aria-hidden="true" />
                    </span>

                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-start justify-between gap-x-2 gap-y-0.5">
                            <span class="break-words text-sm font-semibold text-gray-700">
                                {{ $entry['title'] }}
                            </span>
                            <span class="shrink-0 whitespace-nowrap font-mono text-xs text-gray-500">
                                {{ $entry['time'] }} · {{ $entry['date'] }}
                            </span>
                        </div>
                        @if ($entry['description'] ?? false)
                            <p class="mt-0.5 break-words text-xs text-gray-500">
                                {{ $entry['description'] }}
                            </p>
                        @endif
                    </div>
                </div>
            @empty
                <div class="py-6 text-center text-sm text-gray-500">
                    No hay actividad registrada para este visitante.
                </div>
            @endforelse
        </div>
    </div>
</x-filament::section>
