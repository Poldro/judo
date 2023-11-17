<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Autocomplete,
		popup,
		type AutocompleteOption,
		type PopupSettings
	} from '@skeletonlabs/skeleton';

	export let data;
	const transformTechniquesToOptions = (techniques): AutocompleteOption<string>[] => {
		const options: AutocompleteOption<string>[] = [];

		techniques.forEach((techniqueGroup) => {
			techniqueGroup.categories.forEach((category) => {
				category.sub_categories.forEach((subCategory) => {
					subCategory.techniques.forEach((technique) => {
						options.push({
							label: technique.name,
							value: technique.slug,
							keywords: `${techniqueGroup.name}, ${category.name}, ${subCategory.name}`
						});
					});
				});
			});
		});

		return options;
	};

	const flavorOptions: AutocompleteOption<string>[] = transformTechniquesToOptions(data);

	let inputPopupDemo: string = '';

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};
	function onPopupSelect(event: CustomEvent<AutocompleteOption<string>>): void {
        const slug = event.detail.value;
        goto(`/tecniche/${slug}`);
	}
	$: showAutocomplete = inputPopupDemo.length > 0;
</script>

<div class="w-full max-w-sm">
<input
	class="input autocomplete p-2"
	type="search"
	name="autocomplete-search"
	bind:value={inputPopupDemo}
	placeholder="Es. seoi-nage, te-waza,..."
	use:popup={popupSettings}
/>
<div data-popup="popupAutocomplete">
	{#if showAutocomplete}
		<Autocomplete
			emptyState="Nessun risultato"
			bind:input={inputPopupDemo}
			options={flavorOptions}
			on:selection={onPopupSelect}
		/>
	{/if}
</div>
</div>