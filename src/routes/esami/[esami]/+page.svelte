<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import NavigationListNumber from '$lib/components/List/NavigationListNumber.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	type ProgramRef = { sort: number; name: string; slug: string };
	$: items = (data.exams.exams_programs ?? [])
		.sort((a, b) => {
			const aRef = a.programs_exam_slug as ProgramRef;
			const bRef = b.programs_exam_slug as ProgramRef;
			return aRef.sort - bRef.sort;
		})
		.map((i) => {
			const ref = i.programs_exam_slug as ProgramRef;
			return {
				title: ref.name,
				href: `/esami/${data.exams.slug}/${ref.slug}`
			};
		});

	let title: string;
	let metaTitle: string;
	let metadescription: string;
	let seoProps;

	$: title = data.exams.name;

	$: metaTitle = 'Programma esame tecniche ' + title + ' Judo';

	$: metadescription = 'Programma esame tecniche ' + title + ' Judo Italia';

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="card p-4 max-w-xl w-full border border-surface-300-600-token">
		<NavigationListNumber {items} />
	</div>
</PageContainer>
