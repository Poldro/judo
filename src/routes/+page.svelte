<script lang="ts">
	import { navigation } from '$lib/content/navigation';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>


<div class="container h-full mx-auto flex justify-center items-center space-x-10">
	{#each navigation as { title, href }}
		<a class="block card card-hover p-4" {href}>
			<section class="p-4">{title}</section>

		</a>
	{/each}
</div>
