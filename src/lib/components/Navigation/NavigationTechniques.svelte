<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';

	export let data;
	export let drawerClose: () => void = () => {};
	// Function to determine active class
	/* 	$: classesActive = (href: string) => {
		const currentFirstSegment = $page.url.pathname.split('/').filter(Boolean)[0];
		const hrefFirstSegment = href.split('/').filter(Boolean)[0];
		return currentFirstSegment === hrefFirstSegment ? '!bg-primary-500' : '';
	}; */
</script>

<!-- Should have used Recursive Mode: <RecursiveTreeView nodes={myTreeViewNodes} /> -->
<TreeView>
	{#each data as item}
		<TreeViewItem>
			{item.name}
			<svelte:fragment slot="children">
				{#each item.categories || [] as category}
					<TreeViewItem>
						{category.name}
						<svelte:fragment slot="children">
							{#each category.sub_categories || [] as subCategory}
								<TreeViewItem>
									{subCategory.name}
									<svelte:fragment slot="children">
										{#each subCategory.techniques || [] as technique}
											<a href={`/tecniche/${technique.slug}`} on:click={drawerClose}>
												<TreeViewItem>
													{technique.name}
												</TreeViewItem>
											</a>
										{/each}
									</svelte:fragment>
								</TreeViewItem>
							{/each}
							{#each category.techniques || [] as technique}
								<TreeViewItem>
									<a href={`/tecniche/${technique.slug}`} on:click={drawerClose}>{technique.name}</a
									>
								</TreeViewItem>
							{/each}
						</svelte:fragment>
					</TreeViewItem>
				{/each}
			</svelte:fragment>
		</TreeViewItem>
	{/each}
</TreeView>
