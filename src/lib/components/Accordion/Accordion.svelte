<script lang="ts">
	export let items: { summary: string; content: string; open?: boolean }[] = [];
</script>

<div class="space-y-1">
	{#each items as { summary, content, open = false }}
		<details {open}>
			<summary class="cursor-pointer px-4 py-2 rounded hover:!variant-soft-surface font-medium">
				{summary}
			</summary>
			<div class="px-4 py-2">{@html content}</div>
		</details>
	{/each}
</div>
