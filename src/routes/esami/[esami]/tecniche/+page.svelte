<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import Seo from '$lib/components/SEO/index.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import type { ExamProgram, ExamTechnique } from '$lib/directus';

	export let data;

	type FilteredCategory = { name: string; description?: string; techniques: { slug: string; name: string }[] };

	function filterTechniques(techniques: any[], slugs: string[]) {
		return techniques
			.map((tech) => {
				const allCategories: FilteredCategory[] = [];

				tech.categories?.forEach((cat: any) => {
					const filteredTechniques = cat.techniques?.filter((technique: any) =>
						slugs.includes(technique.slug)
					) ?? [];

					if (filteredTechniques.length > 0) {
						allCategories.push({ ...cat, techniques: filteredTechniques });
					}

					cat.sub_categories?.forEach((subCat: any) => {
						const filteredSubCatTechniques = subCat.techniques?.filter((technique: any) =>
							slugs.includes(technique.slug)
						) ?? [];

						if (filteredSubCatTechniques.length > 0) {
							allCategories.push({ name: subCat.name, techniques: filteredSubCatTechniques });
						}
					});
				});

				return { ...tech, categories: allCategories };
			})
			.filter((tech) => tech.categories.length > 0);
	}

	const slugs = (data.examTechniques.techniques ?? []).map(
		(et) => (et.techniques_slug as ExamTechnique['techniques_slug']).slug
	);
	const filteredData = filterTechniques(data.techniques, slugs);

	let title = 'Tecniche';
	let metaTitle = 'Programma esame tecniche Judo';
	$: currentExam = data.exams?.find((e: any) => e.slug === $page.params.esami);
	$: metadescription = currentExam
		? `Tecniche richieste per l'esame ${currentExam.name}: programma ufficiale Judo Italia.`
		: 'Programma esame tecniche Judo Italia';
	$: seoProps = {
		data,
		title: metaTitle,
		slug: $page.url.pathname,
		metadescription
	};

	let description: ExamProgram[];
	$: description = (data.examTechniques.exams_programs ?? []).filter(
		(i) => i.programs_exam_slug === 'tecniche'
	);

</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="w-full max-w-4xl space-y-6">
		<p class="text-sm opacity-70">{description[0].description_exam}</p>
		{#if filteredData.length === 0}
		<p class="text-sm opacity-60">Al momento non ci sono contenuti, controlla più tardi!</p>
	{/if}
	{#each filteredData as division}
			<div class="space-y-3">
				<h2 class="h2">{division.name}</h2>
				<div class="card border border-surface-300-600-token p-4">
					<div class="grid lg:grid-cols-2 gap-6">
						{#each division.categories as category}
							{#if category.techniques.length > 0}
								<div class="space-y-2">
									<p class="text-xs font-semibold uppercase tracking-wider opacity-50">{category.name}</p>
									<NavigationList
										icon
										items={category.techniques.map((technique: { name: string; slug: string }) => ({
											title: technique.name,
											href: `/tecniche/${technique.slug}`
										}))}
									/>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</PageContainer>
