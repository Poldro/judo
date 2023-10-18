<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import { dan1 } from '$lib/content/navigation-2-level';
</script>

<Container>
	<div class="flex justify-center mx-4">
		<div class="lg:max-w-2xl w-full">
			<NavigationList items={dan1} />
		</div>
	</div>
</Container>
