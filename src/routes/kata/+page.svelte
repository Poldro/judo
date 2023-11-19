<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';

	export let data;
</script>

<PageContainer>
	<div class="max-w-4xl w-full space-y-10 grid grid-cols-2 gap-6">
		{#each data.katas as kata}
			<a class="flex flex-col card card-hover p-4 text-center space-y-4" href="kata/{kata.slug}">
				<h3 class="h3">{kata.name}</h3>
				<p class='flex-1'>{kata.description}</p>
			</a>
		{/each}
	</div>
</PageContainer>
