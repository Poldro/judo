<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Download from '$lib/svg/Download.svelte';

	export let data;

	let title: string;
	let metadescription: string;
	let videos: any;
	let seoProps: any;
	let jsonLd: string;

	function stripHtml(html: string): string {
		return html?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() ?? '';
	}

	$: title = data.kata.name + ' ' + data.kata.jpn_name;
	$: metadescription = stripHtml(data.kata.description);
	$: videos = data.kata.videos;

	$: seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `${data.kata.name} - Kata Judo`,
		name: data.kata.name,
		description: metadescription,
		inLanguage: 'it',
		url: `${data.globals?.siteUrl}${$page.url.pathname}`,
		author: { '@type': 'Organization', name: data.globals?.siteTitle ?? 'Judo Italia' }
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

	<div
		class="max-w-4xl w-full card p-4 space-y-6 lg:space-y-10 flex flex-col justify-center items-center"
	>
		<div class="max-w-xl space-y-6">
			<h3 class="h3 font-semibold">{title} - {data.kata.traduction_name}</h3>

			<div class="prose">{@html $page.data.kata.content}</div>
			<div class="w-full flex justify-center">
				{#if data.kata.pdf_url}
					<a href={data.kata.pdf_url} target="_blank" type="button" class="btn variant-filled">
						<span class="flex-auto">Download pdf</span>
						<span class="badge"> <Download /></span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</PageContainer>
