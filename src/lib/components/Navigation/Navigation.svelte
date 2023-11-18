<script lang="ts">
	import NavigationList from '../List/NavigationList.svelte';
	import NavigationTechniques from './NavigationTechniques.svelte';

	export let data;
	export let drawerClose;

	$: exams = data.exams.map((i) => ({
		title: i.name,
		href: `/esami/${i.slug}`
	}));

	$: katas = data.katas.map((i) => ({
		title: i.name,
		href: `/kata/${i.slug}`
	}));

</script>

<div class="p-4 space-y-6">
	<div class="space-y-2">
		<a class="font-semibold h3" href="/esami" on:click={drawerClose}>Esami</a>
		<NavigationList items={exams} {drawerClose}/>
	</div>
	<div class="space-y-2">
		<a class="font-semibold h3" href="/tecniche" on:click={drawerClose}>Tecniche</a>
		<NavigationTechniques data={data.techniques} {drawerClose} />
	</div>
	<div class="space-y-2">
		<a class="font-semibold h3" href="/kata" on:click={drawerClose}>Kata</a>
		<NavigationList items={katas} {drawerClose}/>
	</div>

</div>
