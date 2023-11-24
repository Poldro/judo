<script lang="ts">
	export let videoId: string;

	$: iframeSrc = `https://www.youtube.com/embed/${videoId}`;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.6.9/plyr.css" />
</svelte:head>

<div class="w-full max-4xl relative">
	<div class="w-full">
		<iframe
			class="w-full aspect-video"
			width="560"
			height="315"
			src={iframeSrc}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</div>
