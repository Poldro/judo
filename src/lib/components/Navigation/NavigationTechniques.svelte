<script lang="ts">
	export let data;
	export let drawerClose: () => void = () => {};
</script>

<style>
	details > summary .indicator {
		transition: transform 150ms ease;
	}
	details[open] > summary .indicator {
		transform: rotate(90deg);
	}
</style>

<div class="space-y-1 text-sm">
	{#each data as item}
		<details>
			<summary class="cursor-pointer list-none px-2 py-1.5 rounded hover:!variant-soft-surface font-medium flex items-center justify-between">
				<span>{item.name}</span>
				<span class="indicator opacity-40 text-xs">›</span>
			</summary>
			<div class="ml-3 mt-1 space-y-1">
				{#each item.categories || [] as category}
					<details>
						<summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface flex items-center justify-between">
							<span>{category.name}</span>
							<span class="indicator opacity-40 text-xs">›</span>
						</summary>
						<div class="ml-3 mt-1 space-y-1">
							{#each category.sub_categories || [] as subCategory}
								<details>
									<summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface text-xs flex items-center justify-between">
										<span>{subCategory.name}</span>
										<span class="indicator opacity-40 text-xs">›</span>
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
