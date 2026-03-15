<script lang="ts">
	import { page } from '$app/stores';

	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import { createNavigationLinks } from '$lib/utils/createNavigationItems.js';
	import Seo from '$lib/components/SEO/index.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import type { Kata, ExamProgram } from '$lib/directus';

	export let data;

	let navigationItems = createNavigationLinks(
		(data.examKatas.katas ?? []).map((kata) => kata.kata_slug as Kata),
		'kata'
	);

	let title = 'Kata';
	let metaTitle = 'Programma esame kata Judo';
	let metadescription = 'Programma kata Judo Italia';
	const seoProps = {
		data,
		title: metaTitle,
		slug: $page.url.pathname,
		metadescription
	};

	let description: ExamProgram[];
	$: description = (data.examKatas.exams_programs ?? []).filter(
		(i) => i.programs_exam_slug === 'kata'
	);
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="max-w-xl w-full">
		<div class="card p-4 space-y-6">
			<p>{description[0].description_exam}</p>

			{#if navigationItems.length > 0}
				<NavigationList items={navigationItems} icon />
			{:else}
				<p class="text-sm opacity-60">Al momento non ci sono contenuti, controlla più tardi!</p>
			{/if}
		</div>
	</div>
</PageContainer>
