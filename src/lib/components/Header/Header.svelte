<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Hamburger from '$lib/svg/Hamburger.svelte';

	export let handleClick: () => void;
</script>

<!-- App Bar -->

<AppBar>
	<svelte:fragment slot="lead">
		<button class="lg:hidden btn btn-sm mr-4" on:click={handleClick}>
			<Hamburger />
		</button>
		<a href="/"><strong class="text-xl uppercase">🥋 Judo​</strong></a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
