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

	type CategoryResult = { name: string; description?: string; techniques: { name: string; jpn_name: string; slug: string }[] };
	let selectedCategory: string | null = null;
	let filteredCategory: CategoryResult = { name: '', techniques: [] };

	function chunkArray<T>(array: T[], size: number): T[][] {
		let result: T[][] = [];
		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}
		return result;
	}

	function findCategory(categories: any[], categoryName: string): CategoryResult | null {
		for (let category of categories) {
			if (category.name.toLowerCase() === categoryName) {
				return category;
			}
			if (category.categories && category.categories.length > 0) {
				const found = findCategory(category.categories, categoryName);
				if (found) return found;
			}
			if (category.sub_categories && category.sub_categories.length > 0) {
				const found = findCategory(category.sub_categories, categoryName);
				if (found) return found;
			}
		}
		return null;
	}

	function handleDiagramClick(event: CustomEvent<{ clickedItem: string }>) {
		selectedCategory = event.detail.clickedItem.toLowerCase();
		filteredCategory = findCategory(techniques, selectedCategory) ?? { name: '', techniques: [] };
	}

	$: items =
		filteredCategory && filteredCategory.techniques
			? filteredCategory.techniques.map((technique) => ({
					title: `${technique.name} (${technique.jpn_name})`,
					href: `/tecniche/${technique.slug}`
			  }))
			: [];

	$: chunkedItems = chunkArray(items, 6);
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
			<div class="grid lg:grid-cols-2 gap-4">
				{#each chunkedItems as chunk}
					<div class="block card p-4">
						<NavigationList icon items={chunk} />
					</div>
				{/each}
			</div>
		</div>
	{/if}
</PageContainer>
