<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationListNumber from '$lib/components/List/NavigationListNumber.svelte';

	export let data;

	$: items = data.exams.exams_programs
		.sort((a, b) => a.programs_exam_slug.sort - b.programs_exam_slug.sort)
		.map((i) => ({
			title: `${i.programs_exam_slug.name}`, // assuming programs_exam_slug has a 'name' property
			href: `/esami/${data.exams.slug}/${i.programs_exam_slug.slug}` // assuming programs_exam_slug has a 'slug' property
		}));
</script>

<PageContainer>
	<div class="flex justify-center mx-4">
		<div class="lg:max-w-2xl w-full">
			<NavigationListNumber {items} />
		</div>
	</div>
</PageContainer>
