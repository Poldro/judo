<script lang="ts">
	import BackButton from '../Navigation/BackButton.svelte';
	export let title: string;
</script>

<header class="flex items-center gap-4 px-4 py-3 bg-surface-100-900-token border-b border-surface-300-600-token">
	<BackButton />
	<h1 class="flex-1 text-xl font-semibold text-end lg:text-center truncate">{title}</h1>
</header>
