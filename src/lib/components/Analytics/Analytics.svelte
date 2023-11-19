<script lang='ts'>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		// Initialize GTM once
		if (typeof window !== 'undefined') {
			(function(w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-P2WPCZKM');
		}
	});

	$: {
		// Track page views on route change
		if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
			window.dataLayer.push({
				'event': 'pageview',
				'pagePath': $page.url.pathname,
				'pageTitle': document.title
			});
		}
	}
</script>
