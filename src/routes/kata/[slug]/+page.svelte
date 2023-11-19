<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import Video from '$lib/components/Video/Video.svelte';

	export let data;
</script>

<PageContainer>
	<div class="max-w-4xl w-full card p-4">
		<Video videoId={data.kata.youtube_code} />

		<Video videoId={data.kata.youtube_code_2} />
		<p class="max-w-xl">{data.kata.description}</p>
	</div>
</PageContainer>
