<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import BackButton from '../Navigation/BackButton.svelte';

	export let title: string;
</script>

	<AppBar>
		<svelte:fragment slot="lead">
			<BackButton />
		</svelte:fragment>

		<h1 class="h1 text-end lg:text-center">
			{title}
		</h1>
	</AppBar>
