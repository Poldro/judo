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

	$: title = data.technique.name + ' ' + data.technique.jpn_name;
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
			<h3 class="h3 font-semibold">{title} - {data.technique.it_name}</h3>

			{@html $page.data.technique.description}
			<div class="w-full flex justify-center">
				<ButtonLink
					title="International Judo Federation"
					href={data.technique.ijf_url}
					blank={true}
				/>
			</div>
		</div>
	</div>
</PageContainer>
