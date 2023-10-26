<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Video from '$lib/components/Video/Video.svelte';
	const videoId = '0c2TCk8xRIc';
</script>

<Container>
	<div class="flex flex-col items-center mx-4">
		<Video
			{videoId}
			timestamps={[
				{
					title: 'Gruppo I: te waza (tecniche di mani e spalle)',
					items: [
						{ label: 'Uki otoshi (dx e sx)', time: 52 },
						{ label: 'Seoi nage (dx e sx)', time: 77 },
						{ label: 'Kata guruma (dx e sx)', time: 91 }
					]
				},
				{
					title: 'Gruppo II: koshi waza (tecniche di anca)',
					items: [
						{ label: 'Uki goshi (dx e sx)', time: 120 },
						{ label: 'Harai goshi (dx e sx)', time: 140 },
						{ label: 'Tsurikomi goshi (dx e sx)', time: 160 }
					]
				},
				{
					title: 'Gruppo III: ashi waza (tecniche di gamba)',
					items: [
						{ label: 'Okuri ashi barai (dx e sx)', time: 188 },
						{ label: 'Sasae tsurikomi ashi (dx e sx)', time: 212 },
						{ label: 'Uchi mata (dx e sx)', time: 230 }
					]
				}
			]}
			startTime={20}
		/>
	</div></Container
>
