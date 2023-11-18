<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationListNumber from '$lib/components/List/NavigationListNumber.svelte';
	import NavigationTechniques from '$lib/components/Navigation/NavigationTechniques.svelte';
	import type TreeView from '@skeletonlabs/skeleton/dist/components/TreeView/TreeView.svelte.js';

	export let data;

	function filterTechniques(techniques, slugs) {
		return techniques
			.map((tech) => {
				// Filter categories and sub-categories
				const filteredCategories = tech.categories
					?.map((cat) => {
						const filteredSubCategories = cat.sub_categories?.filter((subCat) =>
							subCat.techniques?.some((technique) => slugs.includes(technique.slug))
						);

						return {
							...cat,
							sub_categories: filteredSubCategories,
							techniques: cat.techniques?.filter((technique) => slugs.includes(technique.slug))
						};
					})
					.filter((cat) => cat.techniques?.length > 0 || cat.sub_categories?.length > 0);

				return {
					...tech,
					categories: filteredCategories
				};
			})
			.filter((tech) => tech.categories?.length > 0);
	}

	// Usage
	const slugs = data.examTechniques.map((et) => et.slug);
	const filteredData = filterTechniques(data.techniques, slugs);
	console.log(filteredData);
</script>

<PageContainer>
	<div class="w-full max-w-4xl space-y-6">
		{#each filteredData as division}
			<h2 class="h2">{division.name}</h2>
			<div class="card p-6">
				{#each division.categories as category}
					{#if category.techniques.length > 0}
						<div class="">
							<h3 class="h3">{category.name}</h3>
							<div class="grid lg:grid-cols-2 my-4">
								{#each category.techniques as technique}
									<NavigationListNumber
										items={[
											{
												title: technique.name,
												href: `/tecniche/${technique.slug}`
											}
										]}
									/>
								{/each}
							</div>
						</div>
					{/if}

					{#if category.sub_categories.length > 0}
						<h3 class="h3">{category.name}</h3>

						<div class="grid lg:grid-cols-2">
							{#each category.sub_categories as sub_category}
								<div class="p-4">
									<h4 class="h4">{sub_category.name}</h4>
                                    <div class="my-4">

									{#each sub_category.techniques as technique}
										<NavigationListNumber
											items={[
												{
													title: technique.name,
													href: `/tecniche/${technique.slug}`
												}
											]}
										/>
									{/each}
                                    </div>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</PageContainer>
