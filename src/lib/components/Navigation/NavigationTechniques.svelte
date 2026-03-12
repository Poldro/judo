<script lang="ts">
	export let data;
	export let drawerClose: () => void = () => {};
</script>

<div class="space-y-1 text-sm">
	{#each data as item}
		<details>
			<summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface font-medium">
				{item.name}
			</summary>
			<div class="ml-3 mt-1 space-y-1">
				{#each item.categories || [] as category}
					<details>
						<summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface">
							{category.name}
						</summary>
						<div class="ml-3 mt-1 space-y-1">
							{#each category.sub_categories || [] as subCategory}
								<details>
									<summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface text-xs">
										{subCategory.name}
									</summary>
									<div class="ml-3 mt-1 space-y-0.5">
										{#each subCategory.techniques || [] as technique}
											<a
												href={`/tecniche/${technique.slug}`}
												on:click={drawerClose}
												class="block px-2 py-1 rounded hover:!variant-soft-surface text-xs"
											>
												{technique.name}
											</a>
										{/each}
									</div>
								</details>
							{/each}
							{#each category.techniques || [] as technique}
								<a
									href={`/tecniche/${technique.slug}`}
									on:click={drawerClose}
									class="block px-2 py-1 rounded hover:!variant-soft-surface text-xs"
								>
									{technique.name}
								</a>
							{/each}
						</div>
					</details>
				{/each}
			</div>
		</details>
	{/each}
</div>
