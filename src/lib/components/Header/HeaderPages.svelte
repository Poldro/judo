<script lang="ts">
	import BackButton from '../Navigation/BackButton.svelte';
	import Hamburger from '$lib/svg/Hamburger.svelte';
	import { getContext } from 'svelte';

	export let title: string;

	const openDrawer = getContext<() => void>('openDrawer');
</script>

<header class="flex items-center gap-2 px-4 py-3 bg-surface-100-900-token border-b border-surface-300-600-token">
	<button class="lg:hidden btn btn-sm shrink-0 mr-1" onclick={openDrawer} aria-label="Open navigation">
		<Hamburger />
	</button>
	<BackButton />
	<h1 class="flex-1 text-lg font-semibold lg:text-center truncate">{title}</h1>
</header>
