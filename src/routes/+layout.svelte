<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Header from '$lib/components/Header/Header.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';

	import Close from '$lib/svg/Close.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
	function drawerClose(): void {
		drawerStore.close();
	}

	export let data;

	import BackButton from '$lib/components/Navigation/BackButton.svelte';
	import { page } from '$app/stores';
	import Analytics from '$lib/components/Analytics/Analytics.svelte';

	function formatTitle(pathSegment: string): string {
		return pathSegment
			.replace(/-/g, ' ')
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	let titleSegment: string | null = null;

	$: titleSegment = $page.url.pathname.split('/').pop() || null;
	$: formattedTitle = titleSegment ? formatTitle(titleSegment) : '';
</script>

<Analytics />
<Drawer>
	<AppBar gap="gap-0" slotTrail="place-content-end gap-0">
		<svelte:fragment slot="trail">
			<button class="btn btn-sm" on:click={drawerClose}>
				<Close />
			</button></svelte:fragment
		>
	</AppBar>
	<Navigation data={data} {drawerClose} />

	
</Drawer>

<AppShell slotSidebarLeft="bg-surface-100-800-token w-0 lg:w-64" regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<Header handleClick={drawerOpen} />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation data={data} {drawerClose} />
	</svelte:fragment>

	
	<slot />
</AppShell>
