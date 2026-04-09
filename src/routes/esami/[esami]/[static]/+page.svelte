<script lang="ts">
	import { page } from '$app/stores';
	import LogoClouds from '$lib/components/List/LogoClouds.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	let title: string;
	let metadescription: string;
	let seoProps;

	$: title = data.programs.name;
	$: metadescription = data.programs.description;

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: title,
		name: title,
		description: metadescription,
		inLanguage: 'it',
		url: `${data.globals?.siteUrl}${$page.url.pathname}`,
		author: { '@type': 'Organization', name: data.globals?.siteTitle ?? 'Judo Italia' }
	});

	$: urls = (data.programs.urls ?? []).map((i) => ({
		title: (i.url_id as { name: string; url: string }).name,
		href: (i.url_id as { name: string; url: string }).url
	}));
</script>

<Seo {...seoProps} />

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full">
		<LogoClouds items={urls} />
	</div>
	<div class="max-w-2xl w-full">
		<div class="prose">{@html data.programs.content}</div>
	</div>
</PageContainer>
