<script lang="ts">
	import { page } from '$app/stores';
	import LogoClouds from '$lib/components/List/LogoClouds.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

	let title: string;
	let metadescription: string;
	let seoProps;

	$: title = data.programs.name;
	$: metadescription = data.programs.description;

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: urls = data.programs.urls.map((i) => ({
		title: i.url_id.name,
		href: i.url_id.url
	}));
</script>

<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full">
		<LogoClouds items={urls} />
	</div>
	<div class="max-w-4xl flex flex-col items-center">
		{@html data.programs.content}
		<div />
	</div>
</PageContainer>
