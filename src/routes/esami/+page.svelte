<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';
	import type { LayoutServerData } from '../$types';

	export let data: LayoutServerData;

	$: danExams = data.exams.filter((e: any) => !e.type || e.type === 'dan');
	$: coachExams = (data.exams.filter((e: any) => e.type === 'allenatore' && (e.level === null || e.level <= 1)) as any[])
		.sort((a, b) => (a.level ?? 0) - (b.level ?? 0));

	const seoProps = {
		data,
		title: 'Esami 1°, 2° e 3° DAN Judo',
		slug: $page.url.pathname,
		metadescription: 'Elenco programmi esami DAN e da Allenatore di Judo Italia'
	};
</script>

<Seo {...seoProps} />
<HeaderPages title="Esami" />

<PageContainer>
	<div class="w-full max-w-lg flex flex-col gap-10">

		<!-- ── Cintura Nera ──────────────────────────────────────────── -->
		<section class="flex flex-col gap-3">
			<div class="flex items-center gap-2 mb-1">
				<span class="text-2xl">🥋</span>
				<h2 class="text-lg font-semibold">Cintura Nera</h2>
			</div>

			{#each danExams as { name, slug } (slug)}
				<a class="block card card-hover border border-surface-300-600-token" href="esami/{slug}">
					<div class="p-4 flex items-center gap-4">
						<span class="badge variant-soft-primary font-bold w-10 h-10 rounded-full shrink-0 text-base">
							{name.match(/\d/)?.[0] ?? ''}°
						</span>
						<p class="font-semibold leading-tight">{name}</p>
						<span class="ml-auto opacity-30 text-lg">›</span>
					</div>
				</a>
			{/each}

			<a
				class="btn variant-soft w-auto self-start text-sm mt-1"
				target="_blank"
				href="./J_Esami Regionali di Graduazione 2023.pdf"
			>📄 Programmi ufficiali (PDF)</a>
		</section>

		<!-- ── Esami da Allenatore ───────────────────────────────────── -->
		<section class="flex flex-col gap-3">
			<div class="flex items-center gap-2 mb-1">
				<span class="text-2xl">📋</span>
				<h2 class="text-lg font-semibold">Esami da Allenatore</h2>
			</div>

			{#if coachExams.length === 0}
				<p class="text-sm opacity-50 px-1">Nessun programma disponibile.</p>
			{:else}
				{#each coachExams as { name, slug, level } (slug)}
					<a class="block card card-hover border border-surface-300-600-token" href="esami/{slug}">
						<div class="p-4 flex items-center gap-4">
							<span
								class="badge font-bold w-10 h-10 rounded-full shrink-0 text-base"
								style="background:color-mix(in srgb, var(--color-warning-500, #f59e0b) 15%, transparent); color: var(--color-warning-700, #b45309);"
							>
								{level}°
							</span>
							<div class="flex flex-col leading-tight">
								<p class="font-semibold">{name}</p>
								<p class="text-xs opacity-50">Esame tecnico federale</p>
							</div>
							<span class="ml-auto opacity-30 text-lg">›</span>
						</div>
					</a>
				{/each}
			{/if}
		</section>

	</div>
</PageContainer>
