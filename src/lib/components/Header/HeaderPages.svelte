<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { AppBar } from '@skeletonlabs/skeleton';
	import BackButton from '../Navigation/BackButton.svelte';

	export let title: string;

	let animate = true; // Set to true to enable animation on load
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<BackButton />
	</svelte:fragment>

	<h1 class="h1 text-end lg:text-center">
		{#if animate}
			{title}
		{:else}
			{title}
		{/if}
	</h1>
</AppBar>
