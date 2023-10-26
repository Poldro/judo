<script lang="ts">
	import { navigation } from '$lib/content/navigation-1-level';
</script>

<div class="h-full mx-4 flex justify-center items-center">
	<div class="max-w-lg flex flex-col justify-between w-full space-y-10">

	{#each navigation as { title, href }}
		<a class="block card card-hover p-4 text-center h3" {href}>
			<section class="p-4">{title}</section>
		</a>
		
	{/each}
	<a class="btn variant-filled w-auto" target="_blank" href="./J_Esami Regionali di Graduazione 2023.pdf">Programmi (pdf)</a>

</div>
</div>