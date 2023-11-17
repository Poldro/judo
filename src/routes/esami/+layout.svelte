<script lang="ts">
	import BackButton from '$lib/components/Navigation/BackButton.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

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

<AppBar>
	<svelte:fragment slot="lead">
		<BackButton />
	</svelte:fragment>

	<h1 class="h1 text-end lg:text-center">
		{formattedTitle}
	</h1>
</AppBar>
<slot />
