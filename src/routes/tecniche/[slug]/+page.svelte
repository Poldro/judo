<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO/index.svelte';
	let title = $page.data.technique.name;
	let metadescription = $page.data.technique.description;

	const seoProps = {
		data: $page.data,
		title,
		slug: $page.url.pathname,
		metadescription
	};
</script>

<Seo {...seoProps} />
<h1>{$page.data.technique.name}</h1>
<div>{@html $page.data.technique.description}</div>
