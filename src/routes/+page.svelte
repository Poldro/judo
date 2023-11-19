<script lang="ts">
	import Seo from '$lib/components/SEO/index.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').LayouServerData} */
	export let data;

	let title = 'Home';

	const seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription: data.globals.description
	};
</script>

<Seo {...seoProps} />
<PageContainer>
	<div class="max-w-lg flex flex-col justify-between w-full space-y-10">
		<a class="block card card-hover p-4 text-center h3 w-full" href="/esami">
			<section class="p-4">Esami</section>
		</a>

		<a class="block card card-hover p-4 text-center h3" href="/tecniche">
			<section class="p-4">Tecniche</section>
		</a>
		<a class="block card card-hover p-4 text-center h3" href="/kata">
			<section class="p-4">Kata</section>
		</a>
	</div>
</PageContainer>
