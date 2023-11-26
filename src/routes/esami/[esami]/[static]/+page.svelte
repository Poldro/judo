<script lang='ts'>
	import { page } from '$app/stores';
	import LogoClouds from '$lib/components/List/LogoClouds.svelte';
	import { links_utili } from '$lib/content/storia-link-utili';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import Seo from '$lib/components/SEO/index.svelte';

	export let data;

    let title: string;
	let metadescription: string;
	let videos: any;
	let seoProps;

	$: title = data.programs.name;
	$: metadescription = data.programs.description;

	$: seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription
	};

	$: console.log(data.programs);
</script>


<Seo {...seoProps} />
<HeaderPages {title} />

<PageContainer>
	<div class="max-w-4xl w-full">
		<LogoClouds items={links_utili} />
	</div>
	<div class="max-w-4xl flex flex-col items-center">
        {@html data.programs.content}
		<!-- 	<div class="card p-4 lg:p-6 sm:max-w-xs w-full">
				<TableOfContents />
			</div> -->
		<div />
	</div>
</PageContainer>
