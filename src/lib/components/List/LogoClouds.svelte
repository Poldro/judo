<script lang="ts">
	import BlankLink from '$lib/svg/BlankLink.svelte';

	export let items: { title: string; href: string }[] = [];
</script>

<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5 w-full">
	{#each items as { title, href }}
		<a href={href} target="_blank" rel="nofollow noreferrer" class="logo-item">
			<span>{title}</span>
			<span><BlankLink /></span>
		</a>
	{/each}
</div>
