<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';

	export let data;

	let kata = data.kata;

	let title = kata.name;
	let metadescription = kata.description;

	const seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<PageContainer>
	<div class="max-w-4xl w-full card p-4 space-y-10">
		<h2 class="h2 max-w-xl">{kata.name} ({kata.traduction_name})</h2>

		<p class="max-w-xl">{kata.description}</p>

		<div>
		<Video videoId={kata.youtube_code} />

		<Video videoId={kata.youtube_code_2} />
	</div>
	</div>
</PageContainer>
