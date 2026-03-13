<script lang="ts">
	import { goto } from '$app/navigation';

	interface Technique {
		slug: string;
		name: string;
	}
	interface SubCategory {
		name: string;
		techniques: Technique[] | null;
	}
	interface Category {
		name: string;
		techniques: Technique[] | null;
		sub_categories: SubCategory[] | null;
	}
	interface TechniqueGroup {
		name: string;
		categories: Category[] | null;
	}

	export let data: TechniqueGroup[];

	let query = '';
	let showResults = false;

	$: allTechniques = data.flatMap((group) =>
		(group.categories ?? []).flatMap((cat) => [
			...(cat.techniques ?? []).map((t) => ({ ...t, group: group.name, category: cat.name })),
			...(cat.sub_categories ?? []).flatMap((sub) =>
				(sub.techniques ?? []).map((t) => ({
					...t,
					group: group.name,
					category: `${cat.name} > ${sub.name}`
				}))
			)
		])
	);

	$: results =
		query.length > 1
			? allTechniques.filter(
					(t) =>
						t.name.toLowerCase().includes(query.toLowerCase()) ||
						t.category.toLowerCase().includes(query.toLowerCase())
				)
			: [];

	function select(slug: string) {
		query = '';
		showResults = false;
		goto(`/tecniche/${slug}`);
	}
</script>

<div class="relative w-full max-w-sm">
	<input
		class="w-full px-3 py-2 rounded border border-surface-300-600-token bg-surface-50-950-token text-sm"
		type="search"
		bind:value={query}
		on:focus={() => (showResults = true)}
		on:blur={() => setTimeout(() => (showResults = false), 150)}
		placeholder="Es. seoi-nage, te-waza,..."
	/>
	{#if showResults && query.length > 1}
		<div
			class="absolute z-50 w-full mt-1 card p-2 max-h-48 overflow-y-auto shadow-lg bg-surface-50-950-token border border-surface-300-600-token"
		>
			{#if results.length > 0}
				{#each results as technique}
					<button
						class="w-full text-left px-2 py-1.5 rounded text-sm hover:!variant-soft-surface block"
						on:click={() => select(technique.slug)}
					>
						<span class="font-medium">{technique.name}</span>
						<span class="text-xs opacity-60 ml-1">{technique.category}</span>
					</button>
				{/each}
			{:else}
				<p class="px-2 py-2 text-sm opacity-50">Nessuna tecnica trovata</p>
			{/if}
		</div>
	{/if}
</div>
