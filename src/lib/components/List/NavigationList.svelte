<script lang="ts">
	import ArrowRight from '$lib/svg/ArrowRight.svelte';
	import BlankLink from '$lib/svg/BlankLink.svelte';

	export let items: { title: string; href: string; blank?: boolean }[] = [];
	export let icon: Boolean = false;
	export let drawerClose: () => void = () => {};
</script>

<nav class="list-nav w-full">
	<ul>
		{#each items as { title, href, blank }, i}
			<li class="flex items-center">
				<a
					{href}
					on:click={drawerClose}
					class="w-full hover:!variant-soft-surface"
					target={blank ? '_blank' : ''}
				>
					<span class="flex-1 whitespace-normal">{title}</span>

					{#if icon}
						<span>
							{#if blank}
								<BlankLink />
							{:else}
								<ArrowRight />
							{/if}
						</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
