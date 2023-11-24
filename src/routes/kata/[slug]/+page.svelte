<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';

	export let data;
	let title: string;
	let metadescription: string;
	let videos: any;

	$: title = data.kata.name + ' ' + '(' + data.kata.traduction_name + ')';
	$: metadescription = data.kata.description;
	$: videos = data.kata.videos;

	let seoProps;

	$: seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	}
	

</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="max-w-4xl w-full card p-4 space-y-10 flex flex-col justify-center items-center">
		<p class="max-w-xl text-center">
			<strong>{data.kata.name} ({data.kata.traduction_name})</strong>
			<br />
			{data.kata.description}
		</p>
		{#if data.kata.pdf_url}
			<a class="btn variant-soft-primary max-w-xs w-full" target="_blank" href={data.kata.pdf_url}
				>Download pdf</a
			>
		{/if}
	</div>
	<div class="max-w-4xl w-full space-y-10 flex flex-col justify-center items-center">
		{#if videos.length > 0}
			{#each videos as video}
				<div class="w-full">
					{video.video_id.name}
					<Video videoId={video.video_id.url_yt} />
				</div>
			{/each}
		{/if}
	</div>
</PageContainer>
