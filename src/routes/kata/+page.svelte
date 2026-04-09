<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	let title = 'Kata';
	let metadescription = 'Le forme codificate del judo: Nage-no-kata, Katame-no-kata, Ju-no-kata e tutti i kata del Kodokan con descrizione e struttura.';

	const seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Kata del Kodokan',
		description: metadescription,
		url: `${data.globals?.siteUrl}/kata`,
		numberOfItems: data.katas.length,
		itemListElement: data.katas.map((kata: any, i: number) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: `${kata.name} — ${kata.traduction_name}`,
			url: `${data.globals?.siteUrl}/kata/${kata.slug}`,
			description: kata.description?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 160)
		}))
	});
</script>

<Seo {...seoProps} />

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<HeaderPages {title} />

<PageContainer>
	<p class="text-sm opacity-70 max-w-2xl">
		Le forme codificate del judo, tramandate dal Kodokan. Ogni kata rappresenta una serie di tecniche eseguite in sequenza fissa, studiate per gli esami e la pratica tradizionale.
	</p>
	<div class="max-w-4xl w-full grid lg:grid-cols-2 gap-4">
		{#each data.katas as kata}
			<a class="flex flex-col card card-hover bg-surface-100-900-token border border-surface-300-600-token p-5 space-y-2" href="kata/{kata.slug}">
				<div class="flex items-center justify-between">
					<h3 class="font-semibold text-lg leading-tight">{kata.name}</h3>
					<span class="opacity-30 text-lg">›</span>
				</div>
				<p class="text-sm opacity-55">{kata.traduction_name}</p>
				<p class="flex-1 text-sm opacity-70 whitespace-pre-line line-clamp-3">{kata.description}</p>
			</a>
		{/each}
	</div>
</PageContainer>
