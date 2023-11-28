<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-PV28XWLV6J', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PV28XWLV6J">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-PV28XWLV6J');
	</script>
</svelte:head>

<!-- <svelte:head>
	<script
		async
		src="https://analytics.eu.umami.is/script.js"
		data-website-id="5109ace0-7dd6-410a-9cf2-90e523d772f4"
	></script>

	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-P2WPCZKM');
	</script>


<noscript
><iframe
	src="https://www.googletagmanager.com/ns.html?id=GTM-P2WPCZKM"
	height="0"
	width="0"
	style="display:none;visibility:hidden"
/></noscript
>
</svelte:head>

 -->
