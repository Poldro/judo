<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';

  import GoBack from '$lib/svg/GoBack.svelte'
  function goBack() {
    const currentPath = get(page).url.pathname;
    const newPath = currentPath.split('/').slice(0, -1).join('/');
    if (newPath === '') {
      goto('/');
    } else {
      goto(newPath);
    }
  }
</script>

<button on:click={goBack}><GoBack /></button>
