<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO/index.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import DiagramTechniques from '$lib/components/Diagram/DiagramTechniques.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import Search from '$lib/components/Search/Search.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';

	export let data;

	let title = 'Tecniche';
	let metadescription = `
	Nage-waza (投げ技): Tecniche di Lancio e Katame-waza (固技): Tecniche di Controllo.
	Tutte le tecniche ufficiali della International Judo Federation (IJF).
	`;

	const seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: techniques = data.techniques;

	let selectedCategory = null;
	let filteredCategory = { techniques: [] };

	function findCategory(categories, categoryName) {
		for (let category of categories) {
			if (category.name.toLowerCase() === categoryName) {
				return category;
			}
			if (category.categories && category.categories.length > 0) {
				let found = findCategory(category.categories, categoryName);
				if (found) return found;
			}
			if (category.sub_categories && category.sub_categories.length > 0) {
				let found = findCategory(category.sub_categories, categoryName);
				if (found) return found;
			}
		}
		return null;
	}

	function handleDiagramClick(event) {
		selectedCategory = event.detail.clickedItem.toLowerCase();
		filteredCategory = findCategory(techniques, selectedCategory);
	}

	$: items =
		filteredCategory && filteredCategory.techniques
			? filteredCategory.techniques.map((technique) => ({
					title: `${technique.name} (${technique.jpn_name})`,
					href: `/tecniche/${technique.slug}`
			  }))
			: [];
</script>

<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<Search data={techniques} />

	<DiagramTechniques on:itemClicked={handleDiagramClick} {selectedCategory} />
	{#if selectedCategory}
		<div class="max-w-4xl w-full space-y-6">
			<div class="space-y-4">
				<h2 class="h2 text-primary-500 uppercase">{filteredCategory.name}</h2>
				<p>{filteredCategory.description || ''}</p>
			</div>
			{#if filteredCategory.techniques?.length > 0}
				<div class="grid lg:grid-cols-2 gap-4">
					<div class="block card p-4">
						<NavigationList icon {items} />
					</div>
				</div>
			{/if}
		</div>
	{/if}
</PageContainer>
