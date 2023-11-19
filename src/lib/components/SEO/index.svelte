<script>
	import defaultOgImage from '$lib/assets/jigoro-kano.jpg';
	import OpenGraph from './OpenGraph.svelte';
	import Twitter from './Twitter.svelte';

	export let data;
	console.log(data.globals)

	const { author, siteLanguage, siteTitle, siteUrl, twitterUsername } = data?.globals;

	/**
	 * @type {any}
	 */
	export let metadescription;
	export let slug;
	export let title;

	const defaultAlt = 'Mezzo busto di Jigoro Kano, fondatore del Judo.';

	export let featuredImage = {
		url: defaultOgImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Jigoro Kano'
	};

	const pageTitle = `${siteTitle} | ${title}`;
	const url = `${siteUrl}/${slug}`;
	const openGraphProps = {
		image: featuredImage,
		metadescription,
		siteLanguage,
		pageTitle,
		siteTitle,
		url
	};

	const twitterProps = {
		author,
		twitterUsername,
		image: featuredImage
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
