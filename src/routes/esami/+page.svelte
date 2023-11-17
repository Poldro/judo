<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import type { PageServerData } from '../$types';

	export let data: PageServerData;
	console.log(data.exams)
</script>

<PageContainer>
	<div class="max-w-lg flex flex-col justify-between w-full space-y-10">
	

		{#each data.exams as { name, slug }}
			<a class="block card card-hover p-4 text-center h3" href='esami/{slug}'>
				<section class="p-4">{name}</section>
			</a>
		{/each}
		<a
			class="btn variant-filled w-auto"
			target="_blank"
			href="./J_Esami Regionali di Graduazione 2023.pdf">Programmi (pdf)</a
		>
	</div>
</PageContainer>
