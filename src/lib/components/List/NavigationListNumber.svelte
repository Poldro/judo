<script lang="ts">
	import ArrowRight from '$lib/svg/ArrowRight.svelte';
	import BlankLink from '$lib/svg/BlankLink.svelte';

	export let items: { title: string; href: string; blank?: boolean }[] = [];
</script>

<nav class="list-nav w-full">
	<ul>
		{#each items as { title, href, blank }, i}
			<li>
				<a {href} class="hover:!variant-soft-surface" target={blank ? '_blank' : ''}>
					<span class="badge variant-soft-primary shrink-0 w-6 h-6 text-xs">{i + 1}</span>
					<span class="flex-1 whitespace-normal text-sm">{title}</span>
					<span class="opacity-40 shrink-0">
						{#if blank}<BlankLink />{:else}<ArrowRight />{/if}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
