<script lang="ts">
	import { page } from '$app/stores';
	import NavigationList from '../List/NavigationList.svelte';
	import NavigationTechniques from './NavigationTechniques.svelte';

	export let data;
	export let drawerClose;

	$: exams = data.exams
		.filter((i: any) => i.type !== 'allenatore' || (i.level !== null && i.level <= 1))
		.map((i: { name: string; slug: string }) => ({
			title: i.name,
			href: `/esami/${i.slug}`
		}));

	$: katas = data.katas.map((i: { name: string; slug: string }) => ({
		title: i.name,
		href: `/kata/${i.slug}`
	}));

	$: path = $page.url.pathname;
</script>

<div class="p-4 space-y-6">
	<div class="space-y-1">
		<a
			class="flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface {path.startsWith('/esami') ? '!variant-soft-primary' : ''}"
			href="/esami"
			on:click={drawerClose}
		>
			<span>📖</span> Esami
		</a>
		{#if path.startsWith('/esami')}
			<div class="ml-2">
				<NavigationList items={exams} {drawerClose} />
			</div>
		{/if}
	</div>

	<div class="space-y-1">
		<a
			class="flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface {path.startsWith('/tecniche') ? '!variant-soft-primary' : ''}"
			href="/tecniche"
			on:click={drawerClose}
		>
			<span>🥋</span> Tecniche
		</a>
		{#if path.startsWith('/tecniche')}
			<div class="ml-2">
				<NavigationTechniques data={data.techniques} {drawerClose} />
			</div>
		{/if}
	</div>

	<div class="space-y-1">
		<a
			class="flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface {path.startsWith('/kata') ? '!variant-soft-primary' : ''}"
			href="/kata"
			on:click={drawerClose}
		>
			<span>🌊</span> Kata
		</a>
		{#if path.startsWith('/kata')}
			<div class="ml-2">
				<NavigationList items={katas} {drawerClose} />
			</div>
		{/if}
	</div>
</div>
