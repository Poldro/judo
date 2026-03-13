<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
	<p class="text-6xl font-bold opacity-20">{$page.status}</p>
	<h1 class="text-2xl font-semibold">{$page.error?.message ?? 'Errore'}</h1>
	{#if $page.status === 503}
		<p class="opacity-60">Il servizio è temporaneamente non disponibile. Riprova tra qualche momento.</p>
	{:else if $page.status === 404}
		<p class="opacity-60">La pagina che cerchi non esiste.</p>
	{/if}
	<a href="/" class="btn variant-soft mt-4">Torna alla home</a>
</div>
