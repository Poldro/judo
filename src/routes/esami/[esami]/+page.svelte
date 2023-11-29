<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import NavigationListNumber from '$lib/components/List/NavigationListNumber.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	$: items = data.exams.exams_programs
		.sort(
			(a: { programs_exam_slug: { sort: number } }, b: { programs_exam_slug: { sort: number } }) =>
				a.programs_exam_slug.sort - b.programs_exam_slug.sort
		)
		.map((i: { programs_exam_slug: { name: any; slug: any } }) => ({
			title: `${i.programs_exam_slug.name}`, // assuming programs_exam_slug has a 'name' property
			href: `/esami/${data.exams.slug}/${i.programs_exam_slug.slug}` // assuming programs_exam_slug has a 'slug' property
		}));

	let title: string;
	let metaTitle: string;
	let metadescription: string;
	let seoProps;

	$: title = data.exams.name;

	$: metaTitle = 'Programma esame tecniche ' + title + ' Judo';

	$: metadescription = 'Programma esame tecniche ' + title + ' Judo Italia';

	$: console.log(title, metaTitle);

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
	<div class="card p-4 max-w-xl w-full">
		<NavigationListNumber {items} />
	</div>
</PageContainer>
