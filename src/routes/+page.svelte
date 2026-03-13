<script lang="ts">
	import Seo from '$lib/components/SEO/index.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').LayouServerData} */
	export let data;

	let title = 'Homepage judo Italia';

	const seoProps = {
		data,
		title,
		slug: $page.url.pathname,
		metadescription: data.globals.description
	};
</script>

<Seo {...seoProps} />
<PageContainer>
	<div class="max-w-md w-full text-center space-y-1 pt-2">
		<h1 class="text-2xl font-bold uppercase tracking-wide">Judo</h1>
		<p class="text-sm opacity-55">Riferimento tecnico per esami di cintura nera, tecniche IJF e kata</p>
	</div>

	<div class="max-w-md flex flex-col w-full gap-4">
		<a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/esami">
			<div class="p-5 flex items-center gap-4">
				<span class="text-4xl shrink-0">📖</span>
				<div>
					<p class="font-semibold text-lg leading-tight">Esami Cintura Nera</p>
					<p class="text-sm opacity-55 mt-0.5">Programmi, tecniche e requisiti</p>
				</div>
				<span class="ml-auto opacity-30 text-lg">›</span>
			</div>
		</a>

		<a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/tecniche">
			<div class="p-5 flex items-center gap-4">
				<span class="text-4xl shrink-0">🥋</span>
				<div>
					<p class="font-semibold text-lg leading-tight">Tecniche</p>
					<p class="text-sm opacity-55 mt-0.5">Nage-waza e Katame-waza IJF</p>
				</div>
				<span class="ml-auto opacity-30 text-lg">›</span>
			</div>
		</a>

		<a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/kata">
			<div class="p-5 flex items-center gap-4">
				<span class="text-4xl shrink-0">🌊</span>
				<div>
					<p class="font-semibold text-lg leading-tight">Kata</p>
					<p class="text-sm opacity-55 mt-0.5">Le forme codificate del judo</p>
				</div>
				<span class="ml-auto opacity-30 text-lg">›</span>
			</div>
		</a>
	</div>
</PageContainer>
