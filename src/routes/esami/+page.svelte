<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import type { LayoutServerData } from '../$types';

	import Seo from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';

	export let data: LayoutServerData;

	let title = 'Esami';
	let metaTitle = 'Esami 1°, 2° e 3° DAN Judo'
	let metadescription = 'Elenco Programma di 1°, 2° e 3° DAN Judo Italia';
	const seoProps = {
		data,
		title: metaTitle,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<HeaderPages {title} />
<PageContainer>
	<div class="max-w-md flex flex-col w-full gap-4">
		{#each data.exams as { name, slug }}
			<a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="esami/{slug}">
				<div class="p-5 flex items-center gap-4">
					<span class="text-3xl shrink-0">🥋</span>
					<p class="font-semibold text-lg leading-tight">{name}</p>
					<span class="ml-auto opacity-30 text-lg">›</span>
				</div>
			</a>
		{/each}
		<a
			class="btn variant-soft w-auto self-start"
			target="_blank"
			href="./J_Esami Regionali di Graduazione 2023.pdf">Programmi (pdf)</a
		>
	</div>
</PageContainer>
