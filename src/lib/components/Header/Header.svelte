<script lang="ts">
	import Hamburger from '$lib/svg/Hamburger.svelte';

	export let handleClick: () => void;
</script>

<header class="flex items-center justify-between px-4 py-2 bg-surface-100-900-token border-b border-surface-300-600-token">
	<div class="flex items-center gap-2">
		<button class="lg:hidden btn btn-sm mr-2" on:click={handleClick} aria-label="Open navigation">
			<Hamburger />
		</button>
		<a href="/"><strong class="text-xl uppercase">🥋 Judo​</strong></a>
	</div>
</header>
