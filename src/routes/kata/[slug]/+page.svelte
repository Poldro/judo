<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Download from '$lib/svg/Download.svelte';
	import LogoClouds from '$lib/components/List/LogoClouds.svelte';

	export let data;
	let title: string;
	let metadescription: string;
	let videos: any;

	$: title = data.kata.name + ' ' + data.kata.jpn_name;
	$: metadescription = data.kata.description;
	$: videos = data.kata.videos;

	let seoProps;

	$: seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

console.log(data.kata)
/* 	$: urls = data.kata.urls.map((i) => ({
		title: i.url_id.name,
		href: i.url_id.url
	})); */
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="max-w-4xl w-full space-y-10 flex flex-col justify-center items-center">
		{#if videos.length > 0}
			{#each videos as video}
				<div class="w-full">
					<Video videoId={video.video_id.url_yt} />
				</div>
			{/each}
		{/if}
	</div>

	<div class="max-w-4xl w-full card p-4 space-y-10 flex flex-col justify-center items-center">
		<div class="max-w-xl space-y-6">
			<h3 class="h3 font-semibold">{title} - {data.kata.traduction_name}</h3>

		<!-- 	{#if urls.length > 0}<LogoClouds items={urls} />{/if} -->

			{@html $page.data.kata.content}
			<div class="w-full flex justify-center">
				{#if data.kata.pdf_url}
					<a href={data.kata.pdf_url} target='_blank' type="button" class="btn variant-filled">
						<span class="flex-auto">Download pdf</span>

						<span class="badge"> <Download /></span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</PageContainer>
