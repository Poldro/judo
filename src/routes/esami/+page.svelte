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
	<div class="max-w-xl flex flex-col justify-between w-full space-y-6 lg:space-y-10">
		{#each data.exams as { name, slug }}
			<a class="block card card-hover p-4 text-center h3" href="esami/{slug}">
				<section class="p-4">{name}</section>
			</a>
		{/each}
		<a
			class="btn variant-filled w-auto"
			target="_blank"
			href="./J_Esami Regionali di Graduazione 2023.pdf">Programmi (pdf)</a
		>
	</div>
</PageContainer>
