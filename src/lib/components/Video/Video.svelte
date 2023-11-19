<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Plyr from 'plyr';

	export let videoId: string;
	export let startTime: number | null = 0;
	export let muted: boolean = true;

	let isLoading: boolean = false;

	const plyrOptions: Plyr.Options = {
		muted,
		clickToPlay: true,
		keyboard: { focused: true, global: true },
		youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }
	};

	let player: Plyr;
	let started = false;

	function initializePlayer() {
		isLoading = true;
		player = new Plyr('#player', plyrOptions);
		player.on('ready', () => {
			isLoading = false;
			player.on('playing', () => {
				if (!started && startTime !== null) {
					started = true;
					player.pause();
					player.currentTime = startTime;
					player.play();
				}
			});
		});
	}

	onMount(initializePlayer);

	onDestroy(() => {
		player?.destroy();
	});

</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.6.9/plyr.css" />
</svelte:head>

<div class="max-w-4xl w-full">
	<div
		style="--plyr-color-main: rgba(var(--color-primary-500) / 1);"
		id="player"
		class="plyr-container"
		data-plyr-provider="youtube"
		data-plyr-embed-id={videoId}
	/>
	
</div>
