<script lang="ts">
	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
	
	export let items: { summary: string; content: string; open?: boolean }[] = [];
</script>

<Accordion autocollapse>
	{#each items as { summary, content, open = false }}
		<AccordionItem {open}>
			<svelte:fragment slot="summary">{summary}</svelte:fragment>
            <svelte:fragment slot="content">{@html content}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
