<script lang="ts">
	import BackButton from '$lib/components/Navigation/BackButton.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="trail">
		<BackButton />
	</svelte:fragment>
</AppBar>
<slot />
