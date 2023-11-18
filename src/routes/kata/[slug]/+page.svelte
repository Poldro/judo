<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';

	export let data;
</script>

<PageContainer>
	<p>{data.kata.description}</p>
</PageContainer>
