<script lang="ts">
	import ArrowRight from "$lib/svg/ArrowRight.svelte";
	import BlankLink from "$lib/svg/BlankLink.svelte";

	export let title: string;
	export let href: string;
    export let blank: boolean = false;
</script>

<a {href} target={blank ? '_blank' : ''} type="button" class="btn variant-filled">
	<span class="flex-auto">{title}</span>

	{#if blank}
		<span class="badge"> <BlankLink /></span>
	{:else}
		<span class="badge"> <ArrowRight /></span>
	{/if}
</a>
