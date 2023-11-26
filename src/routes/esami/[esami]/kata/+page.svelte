<script lang="ts">
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import NavigationList from '$lib/components/List/NavigationList.svelte';
	import { createNavigationLinks } from '$lib/utils/createNavigationItems.js';

	export let data;
	// Transform data.examKatas into the required format

    let navigationItems = createNavigationLinks(data.examKatas, 'kata');
</script>

<PageContainer>
	<div class="max-w-xl w-full">
		<!--   <h2 class='h2'></h2> -->
		<div class="card p-4 space-y-6">
			<p>{data.programKata.description}</p>
			<div class="flex justify-center">
				<div class="max-w-sm w-full">
					<NavigationList items={navigationItems} icon />
				</div>
			</div>
		</div>
	</div></PageContainer
>
