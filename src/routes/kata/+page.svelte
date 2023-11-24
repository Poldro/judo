<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	let title = 'Kata';
	let metadescription = 'Lista dei kata judo del Kodokan.';

	const seoProps = {
		data: data,
		title,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full grid lg:grid-cols-2 gap-6">
		{#each data.katas as kata}
			<a class="flex flex-col card card-hover p-4 text-center space-y-4" href="kata/{kata.slug}">
				<h3 class="h3">{kata.name} ({kata.traduction_name})</h3>
				<p class="flex-1">{kata.description}</p>
			</a>
		{/each}
	</div>
</PageContainer>
