import directus from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import type { PageServerLoad } from './$types';
import { JUDO_TERMS } from '$lib/content/judo-terms';
import {
	generateTerminologyQuestions,
	generateGokyoQuestions,
	generateCategoryQuestions,
	type FlatTechnique
} from '$lib/utils/generateTechniqueQuiz';

export const load: PageServerLoad = async ({ parent }) => {
	const { techniques: techniques_divisions } = await parent();

	const techniques = await directus.request(
		readItems('techniques', {
			fields: ['slug', 'name', 'jpn_name', 'it_name', 'gokyo'],
			limit: -1
		})
	);

	// Build slug → categoryName map from layout hierarchy
	const categoryMap = new Map<string, string>();
	for (const division of techniques_divisions) {
		for (const category of division.categories ?? []) {
			for (const tech of category.techniques ?? []) {
				categoryMap.set(tech.slug, category.name);
			}
			for (const sub of category.sub_categories ?? []) {
				for (const tech of sub.techniques ?? []) {
					categoryMap.set(tech.slug, category.name);
				}
			}
		}
	}

	const uniqueCategories = [...new Set(categoryMap.values())];

	const flatTechniques: FlatTechnique[] = (
		techniques as Array<{
			slug: string;
			name: string;
			jpn_name: string;
			it_name?: string | null;
			gokyo?: number | null;
		}>
	).map((t) => ({
		slug: t.slug,
		name: t.name,
		jpn_name: t.jpn_name ?? '',
		it_name: t.it_name ?? null,
		gokyo: t.gokyo ?? null,
		categoryName: categoryMap.get(t.slug) ?? null
	}));

	const questions = [
		...generateTerminologyQuestions(JUDO_TERMS),
		...generateGokyoQuestions(flatTechniques),
		...generateCategoryQuestions(flatTechniques, uniqueCategories)
	];

	return { questions };
};
