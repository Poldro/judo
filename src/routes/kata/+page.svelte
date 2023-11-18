<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationListNumber from '$lib/components/List/NavigationListNumber.svelte';

	export let data;
</script>

<PageContainer>
	<div class="max-w-4xl w-full">
		{#each data.katas as kata}
			<NavigationListNumber
				items={[
					{
						title: kata.name,
						href: `/kata/${kata.slug}`
					}
				]}
			/>
		{/each}
	</div>
</PageContainer>
