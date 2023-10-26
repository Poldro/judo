<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	const videoId = '-6g83MgiLMI';
</script>

<Container>
	<div class="flex flex-col items-center mx-4">
		<Video
			{videoId}
			timestamps={[
				{
					title: 'Gruppo I: Osaekomi Waza (immobilizzazioni)',
					items: [
						{ label: 'Kesa-gatame', time: 23 },
					 	{ label: 'Kata-gatame', time: 85 },
						{ label: 'Kamishiho-gatame', time: 115 },
                        { label: 'Yoko-shio-gatame', time: 170 },
						{ label: 'Kuzure-kamishiho-gatame', time: 237 }
					]
				}
			]}
		/>
	</div></Container
>
