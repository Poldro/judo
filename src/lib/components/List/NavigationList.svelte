<script lang="ts">
	import ArrowRight from '$lib/svg/ArrowRight.svelte';
	import BlankLink from '$lib/svg/BlankLink.svelte';

	export let items: { title: string; href: string; blank?: boolean }[] = [];
	export let icon: Boolean = false;
	export let drawerClose: () => void = () => {};
</script>

<nav class="list-nav w-full">
	<ul>
		{#each items as { title, href, blank }}
			<li>
				<a
					{href}
					on:click={drawerClose}
					class="hover:!variant-soft-surface"
					target={blank ? '_blank' : ''}
				>
					<span class="flex-1 whitespace-normal text-sm">{title}</span>
					{#if icon}
						<span class="opacity-40 shrink-0">
							{#if blank}<BlankLink />{:else}<ArrowRight />{/if}
						</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
