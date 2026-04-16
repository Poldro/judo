<script lang="ts">
	import { page } from '$app/stores';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import Video from '$lib/components/Video/Video.svelte';

	export let data;

	let title: string;
	let metadescription: string;
	let videos: any;
	let seoProps;
	let jsonLd: string;

	function stripHtml(html: string): string {
		return html?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() ?? '';
	}

	function truncateText(text: string, max = 155): string {
		if (!text || text.length <= max) return text ?? '';
		return text.slice(0, text.lastIndexOf(' ', max - 3)) + '...';
	}

	$: title = data.technique.name + ' ' + data.technique.jpn_name;
	$: metadescription = truncateText(stripHtml(data.technique.description));
	$: videos = data.technique.videos ?? [];

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription,
		type: 'article'
	};

	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Article',
				headline: `${data.technique.name} (${data.technique.jpn_name}) - Tecnica Judo`,
				name: data.technique.name,
				description: metadescription,
				inLanguage: 'it',
				url: `${data.globals?.siteUrl}${$page.url.pathname}`,
				author: { '@type': 'Organization', name: data.globals?.siteTitle ?? 'Judo Italia' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: data.globals?.siteUrl },
					{ '@type': 'ListItem', position: 2, name: 'Tecniche', item: `${data.globals?.siteUrl}/tecniche` },
					{ '@type': 'ListItem', position: 3, name: data.technique.name, item: `${data.globals?.siteUrl}${$page.url.pathname}` }
				]
			}
		]
	});
</script>

<Seo {...seoProps} />

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full space-y-6 lg:space-y-10 flex flex-col justify-center items-center">
		{#if videos.length > 0}
			{#each videos as video}
				<div class="w-full">
					<Video videoId={video.video_id.url_yt} />
				</div>
			{/each}
		{/if}
	</div>
	<div class="max-w-2xl w-full card p-5 lg:p-8 space-y-6">
		<div class="flex items-start justify-between gap-4 flex-wrap">
			{#if data.technique.it_name}
				<h2 class="h3 font-semibold">{data.technique.it_name}</h2>
			{/if}
			{#if data.technique.gokyo != null}
				<span class="badge variant-soft-primary shrink-0 text-sm font-medium">
					{data.technique.gokyo === 0 ? 'Fuori dal Gokyo' : `Gokyo ${data.technique.gokyo}° gruppo`}
				</span>
			{/if}
		</div>
		<div class="prose">{@html $page.data.technique.description}</div>
	</div>
	{#if data.technique.ijf_url}
		<ButtonLink
			title="International Judo Federation"
			href={data.technique.ijf_url}
			blank={true}
		/>
	{/if}
</PageContainer>
