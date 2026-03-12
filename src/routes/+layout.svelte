<script lang="ts">
	import '../app.css';
	import { fly, fade } from 'svelte/transition';

	import Header from '$lib/components/Header/Header.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import Analytics from '$lib/components/Analytics/Analytics.svelte';

	let { data, children } = $props();

	let drawerOpen = $state(false);
</script>

<Analytics />

<!-- Mobile drawer (hidden on lg+) -->
{#if drawerOpen}
	<div class="fixed inset-0 z-50 lg:hidden">
		<div
			class="absolute inset-0 bg-black/50"
			role="button"
			tabindex="0"
			aria-label="Close navigation"
			onclick={() => (drawerOpen = false)}
			onkeydown={(e) => e.key === 'Escape' && (drawerOpen = false)}
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="absolute left-0 top-0 h-full w-72 bg-surface-50-950-token flex flex-col overflow-y-auto shadow-xl"
			transition:fly={{ x: -288, duration: 200 }}
		>
			<Navigation {data} drawerClose={() => (drawerOpen = false)} />
		</div>
	</div>
{/if}

<!-- App shell -->
<div class="h-screen flex flex-col overflow-hidden">
	<Header handleClick={() => (drawerOpen = true)} />
	<div class="flex flex-1 overflow-hidden">
		<aside class="hidden lg:block w-64 bg-surface-50-950-token overflow-y-auto border-r border-surface-300-600-token">
			<Navigation {data} drawerClose={() => {}} />
		</aside>
		<main class="flex-1 overflow-y-auto scroll-smooth">
			{@render children?.()}
		</main>
	</div>
</div>
