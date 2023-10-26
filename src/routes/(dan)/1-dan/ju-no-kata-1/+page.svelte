<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	const videoId = 'yGdJKwkFs1A';
</script>

<Container>
	<div class="flex flex-col items-center mx-4">
		<Video
			{videoId}
			timestamps={[
				{
					title: 'Gruppo I: Ikkyo',
					items: [
						{ label: 'Tsukidashi (trafiggere con la mano)', time: 14 },
					 	{ label: 'Kata-oshi (spingere con la spalla)', time: 43 },
						{ label: 'Ryote-dori (presa alle due mani)', time: 64 },
                        { label: 'Kata-mawashi (rotazione della spalla)', time: 80 },
						{ label: 'Ago-oshi (respingere il mento)', time: 100 }
					]
				}
			]}
		/>
	</div></Container
>
