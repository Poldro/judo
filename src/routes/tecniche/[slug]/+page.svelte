<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import Video from '$lib/components/Video/Video.svelte';

	export let data;

	let title: string;
	let metadescription: string;
	let videos: any;
	let seoProps;

	$: title = data.technique.name;
	$: metadescription = data.technique.description;
	$: videos = data.technique.videos;

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full card p-4 space-y-10 flex flex-col justify-center items-center">
		<p class="max-w-xl text-center">
			{@html $page.data.technique.description}
		</p>
	</div>
	<div class="max-w-4xl w-full space-y-10 flex flex-col justify-center items-center">
		{#if videos.length > 0}
			{#each videos as video}
				<div class="w-full">
					<Video videoId={video.video_id.url_yt} />
				</div>
			{/each}
		{/if}
	</div>
</PageContainer>
