<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Autocomplete,
		popup,
		type AutocompleteOption,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	interface Technique {
		slug: string;
		name: string;
	}

	interface SubCategory {
		name: string;
		techniques: Technique[];
	}

	interface Category {
		name: string;
		techniques: Technique[];
		sub_categories: SubCategory[];
	}

	interface TechniqueGroup {
		name: string;
		categories: Category[];
	}

	interface AutocompleteOption<T> {
		label: string;
		value: T;
		keywords: string;
	}

	export let data: { techniqueGroups: TechniqueGroup[] };

	const transformTechniquesToOptions = (
		techniqueGroups: TechniqueGroup[]
	): AutocompleteOption<string>[] => {
		const options: AutocompleteOption<string>[] = [];

		techniqueGroups.forEach((techniqueGroup) => {
			techniqueGroup.categories.forEach((category) => {
				// Check for techniques directly under category
				if (category.techniques) {
					category.techniques.forEach((technique) => {
						options.push({
							label: technique.name,
							value: technique.slug,
							keywords: `${techniqueGroup.name}, ${category.name}`
						});
					});
				}
				// Continue with subCategories as before
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

	console.log(flavorOptions, data);
	let inputPopup: string = '';

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};
	function onPopupSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		const slug = event.detail.value;
		goto(`/tecniche/${slug}`);
	}
</script>

<div class="w-full max-w-sm">
	<input
		class="input autocomplete p-2"
		type="search"
		name="autocomplete-search"
		bind:value={inputPopup}
		placeholder="Es. seoi-nage, te-waza,..."
		use:popup={popupSettings}
	/>
	<div data-popup="popupAutocomplete" class=" w-full max-w-sm max-h-48 overflow-y-auto">
		{#if inputPopup.length > 0}

		<div class="card w-full p-4 overflow-y-auto" tabindex="-1">
			<Autocomplete
				emptyState="Nessun risultato"
				bind:input={inputPopup}
				options={flavorOptions}
				on:selection={onPopupSelect}
			/>
		</div>
		{/if}
	</div>
</div>
