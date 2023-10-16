<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import Hamburger from '$lib/components/Header/Hamburger.svelte';

    export let handleClick: () => void;
</script>

<!-- App Bar -->

<AppBar>
	<svelte:fragment slot="lead">
		<Hamburger on:click={handleClick}/>
		<strong class="text-xl uppercase">Judo</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
