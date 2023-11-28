<script lang="ts">
	import { page } from '$app/stores';

	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import { createNavigationLinks } from '$lib/utils/createNavigationItems.js';
	import Seo from '$lib/components/SEO/index.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';

	export let data;
	// Transform data.examKatas into the required format

	let navigationItems = createNavigationLinks(data.examKatas.katas.map(kata => kata.kata_slug), 'kata');

	let title = 'Kata';
	let metaTitle = 'Programma esame kata Judo';
	let metadescription = 'Programma kata Judo Italia';
	const seoProps = {
		data,
		title: metaTitle,
		slug: $page.url.pathname,
		metadescription
	};

	let description: string;
	$: description = data.examKatas.exams_programs.filter((i) => i.programs_exam_slug === 'kata');
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="max-w-xl w-full">
		<div class="card p-4 space-y-6">
			<p>{description[0].description_exam}</p>

			<NavigationList items={navigationItems} icon />
		</div>
	</div>
</PageContainer>
