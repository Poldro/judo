<script lang="ts">
  import { page } from '$app/stores'

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-PV28XWLV6J', {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }


</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=GTM-P2WPCZKM">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-PV28XWLV6J')
  </script>
</svelte:head>
