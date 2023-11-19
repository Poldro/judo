<script lang="ts">
	import type { Image } from '$lib/interfaces/index';

	export let image: Image;
	export let metadescription: string;
	export let siteLanguage: string;
	export let pageTitle: string;
	export let siteTitle: string;
	export let url: string;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={siteLanguage} />
	<meta property="og:url" content={url} />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
</svelte:head>
