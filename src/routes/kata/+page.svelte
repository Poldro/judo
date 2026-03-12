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
	<div class="max-w-4xl w-full grid lg:grid-cols-2 gap-4">
		{#each data.katas as kata}
			<a class="flex flex-col card card-hover bg-surface-100-900-token border border-surface-300-600-token p-5 space-y-2" href="kata/{kata.slug}">
				<div class="flex items-center justify-between">
					<h3 class="font-semibold text-lg leading-tight">{kata.name}</h3>
					<span class="opacity-30 text-lg">›</span>
				</div>
				<p class="text-sm opacity-55">{kata.traduction_name}</p>
				<p class="flex-1 text-sm opacity-70 whitespace-pre-line line-clamp-3">{kata.description}</p>
			</a>
		{/each}
	</div>
</PageContainer>
