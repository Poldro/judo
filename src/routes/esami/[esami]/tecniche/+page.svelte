<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';

	export let data;

	function filterTechniques(techniques, slugs) {
		return techniques
			.map((tech) => {
				// Create a new array for categories and sub-categories
				let allCategories = [];

				tech.categories?.forEach((cat) => {
					// Filter techniques in categories
					const filteredTechniques = cat.techniques?.filter((technique) =>
						slugs.includes(technique.slug)
					);

					if (filteredTechniques?.length > 0) {
						allCategories.push({
							...cat,
							techniques: filteredTechniques
						});
					}

					// Flatten sub-categories
					cat.sub_categories?.forEach((subCat) => {
						const filteredSubCatTechniques = subCat.techniques?.filter((technique) =>
							slugs.includes(technique.slug)
						);

						if (filteredSubCatTechniques?.length > 0) {
							allCategories.push({
								name: subCat.name, // Or adjust the name as needed
								techniques: filteredSubCatTechniques
							});
						}
					});
				});

				return {
					...tech,
					categories: allCategories
				};
			})
			.filter((tech) => tech.categories?.length > 0);
	}

	// Usage
	const slugs = data.examTechniques.map((et) => et.slug);
	const filteredData = filterTechniques(data.techniques, slugs);
</script>

<PageContainer>
	<div class="w-full max-w-4xl space-y-6">
		{#each filteredData as division}
			<h2 class="h2">{division.name}</h2>
			<div class="card p-4">
				<div class="grid lg:grid-cols-2 my-4">
					{#each division.categories as category}
						{#if category.techniques.length > 0}
							<div class="space-y-4">
								<h3 class="h3">{category.name}</h3>
								<NavigationList
									icon
									items={category.techniques.map((technique) => ({
										title: technique.name,
										href: `/tecniche/${technique.slug}`
									}))}
								/>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</PageContainer>
