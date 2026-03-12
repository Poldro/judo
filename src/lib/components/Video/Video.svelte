<script lang="ts">
	export let videoId: string;

	$: iframeSrc = `https://www.youtube.com/embed/${videoId}`;
</script>

<div class="w-full max-4xl relative">
	<div class="w-full">
		<iframe
			class="w-full aspect-video"
			width="560"
			height="315"
			src={iframeSrc}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</div>
