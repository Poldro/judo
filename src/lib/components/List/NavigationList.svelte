<script lang="ts">
	import ArrowRight from '$lib/svg/ArrowRight.svelte';

	export let items: { title: string; href: string, blank?: boolean }[] = [];
</script>

<nav class="list-nav w-full">
	<ul>
		{#each items as { title, href, blank }, i}
			<li class="flex items-center">
				<span class="badge bg-primary-500 w-6 h-6 flex-shrink-0">{i + 1}</span>
				<a {href} class="w-full" target={blank ? '_blank' : ''}>
					<span class="flex-1 whitespace-normal">{title}</span>
					<span class="lg:flex hidden"><ArrowRight /></span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
