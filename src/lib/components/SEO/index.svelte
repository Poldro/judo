<script lang="ts">
	import defaultOgImage from '$lib/assets/jigoro-kano.jpg';
	import OpenGraph from './OpenGraph.svelte';
	import Twitter from './Twitter.svelte';

	export let data;

	const { author, siteLanguage, siteTitle, siteUrl, twitterUsername } = data?.globals;

	export let metadescription: string;
	export let slug: string;
	export let title: string;

	const defaultAlt = 'Mezzo busto di Jigoro Kano, fondatore del Judo.';

	export let featuredImage = {
		url: defaultOgImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Jigoro Kano'
	};

	const openGraphProps = {
		image: featuredImage,
		metadescription,
		siteLanguage,
		pageTitle: title,
		siteTitle,
		url: `${siteUrl}/${slug}`
	};

	const { url, alt } = featuredImage;

	const twitterProps = {
		author,
		twitterUsername,
		image: { url, alt }
	};
</script>

<svelte:head>
	<title>{siteTitle} | {title}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={`${siteUrl}/${slug}`} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
