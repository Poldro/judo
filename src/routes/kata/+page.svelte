<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';

	export let data;
</script>

<PageContainer>
	<div class="max-w-xl w-full space-y-10">
		{#each data.katas as kata}
			<a class="block card card-hover p-4 text-center space-y-4" href="kata/{kata.slug}">
				<h3 class="h3">{kata.name}</h3>
				<p>{kata.description}</p>
			</a>
		{/each}
	</div>
</PageContainer>
