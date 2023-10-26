<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Plyr from 'plyr';
	import ArrowRight from '$lib/svg/ArrowRight.svelte';

	export let videoId: string;
	export let timestamps: { title: string; items: { label: string; time: number }[] }[] = [];
	export let startTime: number | null = 0;
	export let muted: boolean = true;

	const plyrOptions: Plyr.Options = {
		muted,
		clickToPlay: true,
		keyboard: { focused: true, global: true },
		youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }
	};

	let player: Plyr;
	let started = false;

	onMount(() => {
		player = new Plyr('#player', plyrOptions);
		player.on('ready', () => {
			player.on('playing', () => {
				if (!started && startTime !== null) {
					started = true;
					player.pause();
					player.currentTime = startTime;
					player.play();
				}
			});
		});
	});

	onDestroy(() => {
		player?.destroy();
	});

	async function jumpToTime(time: number) {
		if (!player || !started) return;
		await player.pause();
		player.currentTime = time;
		await player.play();
		document.body.scrollIntoView();  // Scrolls to the top of the page
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.6.9/plyr.css" />
</svelte:head>

<div class="max-w-4xl w-full space-y-16 lg:space-y-24">
	<div
		style="--plyr-color-main:  rgba(var(--color-primary-500) / 1);"
		id="player"
		class="plyr-container"
		data-plyr-provider="youtube"
		data-plyr-embed-id={videoId}
	/>

	{#each timestamps as group}
		<div>
			<h3 class="h3 mb-6">{group.title}</h3>
			<ol class="list">
				{#each group.items as item}
					<li>
						<button on:click={() => jumpToTime(item.time)}>{item.label}</button>
						<span><ArrowRight /></span>
					</li>
				{/each}
			</ol>
		</div>
	{/each}
</div>
