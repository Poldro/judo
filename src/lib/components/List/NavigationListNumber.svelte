<script lang="ts">
	import ArrowRight from '$lib/svg/ArrowRight.svelte';
	import BlankLink from '$lib/svg/BlankLink.svelte';

	export let items: { title: string; href: string; blank?: boolean }[] = [];
</script>

<nav class="list-nav w-full">
	<ul>
		{#each items as { title, href, blank }, i}
			<li class="flex items-center">
				<a {href} class="w-full" target={blank ? '_blank' : ''}>
					<span class="badge variant-soft-primary w-6 h-6 flex-shrink-0">{i + 1}</span>
					<span class="flex-1 whitespace-normal">{title}</span>
					<span>
						{#if blank}
							<BlankLink />
						{:else}
							<ArrowRight />
						{/if}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
