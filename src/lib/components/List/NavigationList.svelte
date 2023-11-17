<script lang="ts">
	export let items: { title: string; href: string; blank?: boolean }[] = [];
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
					<span class="flex-1 whitespace-normal p-2">{title}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
