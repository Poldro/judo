<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	import { navigation } from '$lib/content/navigation-1-level';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	$: classesActive = (href: string) => {
		const currentFirstSegment = $page.url.pathname.split('/').filter(Boolean)[0];
		const hrefFirstSegment = href.split('/').filter(Boolean)[0];
		return currentFirstSegment === hrefFirstSegment ? '!bg-primary-500' : '';
	};
</script>

<nav class="list-nav p-2">
	<ul>
		{#each navigation as { title, href }}
			<li>
				<a {href} class={classesActive(href)} on:click={drawerClose}>
					<span class="flex-auto">{title}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
