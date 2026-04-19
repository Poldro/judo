<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';
	import type { LayoutServerData } from '../$types';

	export let data: LayoutServerData;

	$: danExams = data.exams.filter((e: any) => !e.type || e.type === 'dan');

	const seoProps = {
		data,
		title: 'Esami 1°, 2° e 3° DAN Judo',
		slug: $page.url.pathname,
		metadescription: 'Elenco programmi esami DAN e da Allenatore di Judo Italia'
	};

	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Esami di graduazione Judo Italia',
		description: 'Programmi ufficiali degli esami DAN e da Allenatore di Judo Italia',
		url: `${data.globals?.siteUrl}/esami`,
		numberOfItems: danExams.length,
		itemListElement: danExams.map((exam: any, i: number) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: exam.name,
			url: `${data.globals?.siteUrl}/esami/${exam.slug}`
		}))
	});
</script>

<Seo {...seoProps} />

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<HeaderPages title="Esami" />

<PageContainer>
	<div class="w-full max-w-lg flex flex-col gap-10">

		<p class="text-sm opacity-70">
			Programmi ufficiali degli esami di graduazione federale: cintura nera 1°, 2° e 3° DAN.
		</p>

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

	</div>
</PageContainer>
