<script lang="ts">
	import { tick } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO/index.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import Search from '$lib/components/Search/Search.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';

	export let data;

	const title = 'Tecniche';
	const metadescription = `Nage-waza (投げ技): Tecniche di Lancio e Katame-waza (固技): Tecniche di Controllo. Tutte le tecniche ufficiali della International Judo Federation (IJF).`;

	const seoProps = { data, title, slug: $page.url.pathname, metadescription };

	$: techniques = data.techniques;

	type Technique = { name: string; jpn_name: string; slug: string };
	type SubCategory = { name: string; description?: string; techniques: Technique[] };
	type Category = { name: string; description?: string; techniques: Technique[]; sub_categories: SubCategory[] };
	type Division = { name: string; description?: string; categories: Category[] };

	let selectedDivision: string | null = null;
	let selectedCategory: string | null = null;
	let resultsEl: HTMLElement;

	$: if (techniques?.length && !selectedDivision) {
		selectedDivision = techniques[0].name;
	}

	// Auto-select first available category so the page shows content immediately
	$: if (currentDivision && !selectedCategory) {
		for (const cat of currentDivision.categories) {
			if ((cat.techniques ?? []).length > 0) {
				selectedCategory = cat.name;
				break;
			} else if ((cat.sub_categories ?? []).length > 0) {
				selectedCategory = cat.sub_categories[0].name;
				break;
			}
		}
	}

	$: currentDivision = (techniques as Division[])?.find(d => d.name === selectedDivision) ?? null;

	function selectDivision(name: string) {
		selectedDivision = name;
		selectedCategory = null;
	}

	async function selectCategory(name: string) {
		selectedCategory = name;
		await tick();
		resultsEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function chunkArray<T>(array: T[], size: number): T[][] {
		const result: T[][] = [];
		for (let i = 0; i < array.length; i += size) result.push(array.slice(i, i + size));
		return result;
	}

	$: selectedCategoryData = (() => {
		if (!selectedCategory || !currentDivision) return null;
		const lc = selectedCategory.toLowerCase();
		for (const cat of currentDivision.categories) {
			if (cat.name.toLowerCase() === lc) return cat;
			for (const sub of cat.sub_categories ?? []) {
				if (sub.name.toLowerCase() === lc) return sub;
			}
		}
		return null;
	})();

	$: items = (selectedCategoryData?.techniques ?? []).map(t => ({
		title: `${t.name} (${t.jpn_name})`,
		href: `/tecniche/${t.slug}`
	}));

	$: chunkedItems = chunkArray(items, 6);
</script>

<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<p class="text-sm opacity-70 max-w-2xl">
		Catalogo completo delle tecniche ufficiali IJF: <strong>nage-waza</strong> (tecniche di lancio) e <strong>katame-waza</strong> (tecniche di controllo a terra), con nome italiano e giapponese.
	</p>
	<Search data={techniques} />

	<!-- Division tabs -->
	<div class="flex gap-2 flex-wrap w-full max-w-2xl">
		{#each techniques as division}
			<button
				class="btn flex-1 text-sm font-semibold {selectedDivision === division.name ? 'variant-filled' : '!variant-soft-surface border border-surface-300-600-token'}"
				on:click={() => selectDivision(division.name)}
			>
				{division.name}
			</button>
		{/each}
	</div>

	<!-- Category browser -->
	{#if currentDivision}
		<div class="w-full max-w-2xl space-y-5">
			{#each currentDivision.categories as category}
				{@const directTechs = category.techniques ?? []}
				{@const subs = category.sub_categories ?? []}

				{#if directTechs.length > 0}
					<!-- Category with direct techniques → tappable chip -->
					<button
						class="chip w-full text-left px-4 py-3 rounded-lg border {selectedCategory === category.name ? 'border-primary-500 bg-primary-500/10 text-primary-500 font-semibold' : 'border-surface-300-600-token !variant-soft-surface'}"
						on:click={() => selectCategory(category.name)}
					>
						{category.name}
					</button>
				{:else if subs.length > 0}
					<!-- Category with sub-categories → group -->
					<div class="space-y-2">
						<p class="text-xs font-semibold uppercase tracking-wider opacity-50 px-1">{category.name}</p>
						<div class="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap">
							{#each subs as sub}
								<button
									class="chip shrink-0 px-4 py-2 rounded-lg border text-sm {selectedCategory === sub.name ? 'border-primary-500 bg-primary-500/10 text-primary-500 font-semibold' : 'border-surface-300-600-token !variant-soft-surface'}"
									on:click={() => selectCategory(sub.name)}
								>
									{sub.name}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}

	<!-- Techniques list -->
	{#if selectedCategory && selectedCategoryData}
		<div
			bind:this={resultsEl}
			class="max-w-4xl w-full space-y-6"
			transition:fly={{ y: 20, duration: 250, opacity: 0 }}
		>
			<div class="space-y-1">
				<h2 class="h2 text-primary-500 uppercase">{selectedCategoryData.name}</h2>
				{#if selectedCategoryData.description}
					<p class="opacity-70 text-sm">{selectedCategoryData.description}</p>
				{/if}
			</div>
			{#if items.length > 0}
				<div class="grid lg:grid-cols-2 gap-4">
					{#each chunkedItems as chunk}
						<div class="block card p-4 border border-surface-300-600-token">
							<NavigationList icon items={chunk} />
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-sm opacity-50 text-center py-4">Nessuna tecnica in questa categoria.</p>
			{/if}
		</div>
	{/if}
</PageContainer>
