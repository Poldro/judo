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
	$: title = data.exams.name;

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription: 'Programma esame tecniche ' + title + ' Judo Italia'
	};
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="flex flex-col gap-4 max-w-xl w-full">

		<!-- Programmi ────────────────────────────────────────────── -->
		<div class="card p-4 border border-surface-300-600-token">
			{#if items.length > 0}
				<NavigationListNumber {items} />
			{:else}
				<p class="text-sm opacity-60 text-center py-2">Al momento non ci sono contenuti, controlla più tardi!</p>
			{/if}
		</div>

		<!-- Quiz CTA ─────────────────────────────────────────────── -->
		<a
			href="/esami/{data.exams.slug}/quiz"
			class="quiz-cta group block card border-2 border-dashed border-surface-300-600-token hover:border-primary-400 transition-all duration-200"
		>
			<div class="p-5 flex items-center gap-4">
				<div class="quiz-icon text-3xl shrink-0 transition-transform duration-200 group-hover:scale-110">
					🎯
				</div>
				<div class="flex flex-col leading-tight">
					<p class="font-bold text-base">Quiz!</p>
					<p class="text-sm opacity-60">Metti alla prova le tue conoscenze</p>
				</div>
				<span class="ml-auto">
					<span class="badge variant-filled text-xs font-semibold px-3 py-1">
						Inizia
					</span>
				</span>
			</div>
		</a>

	</div>
</PageContainer>

<style>
	.quiz-cta {
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--color-primary-500) 6%, transparent),
			color-mix(in srgb, var(--color-primary-500) 2%, transparent)
		);
	}
	.quiz-cta:hover {
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--color-primary-500) 12%, transparent),
			color-mix(in srgb, var(--color-primary-500) 5%, transparent)
		);
		transform: translateY(-2px);
		box-shadow: 0 4px 20px color-mix(in srgb, var(--color-primary-500) 20%, transparent);
	}
</style>
