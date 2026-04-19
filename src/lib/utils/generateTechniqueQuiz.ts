import type { JudoTerm } from '$lib/content/judo-terms';

export interface TechniqueQuizQuestion {
	id: string;
	question: string;
	option_a: string;
	option_b: string;
	option_c: string;
	option_d: string;
	correct_answer: 'a' | 'b' | 'c' | 'd';
	explanation: string | null;
	type: 'terminology' | 'gokyo' | 'category';
}

export interface FlatTechnique {
	slug: string;
	name: string;
	jpn_name: string;
	it_name: string | null;
	gokyo: number | null;
	categoryName: string | null;
}

function shuffle<T>(arr: T[]): T[] {
	return [...arr].sort(() => Math.random() - 0.5);
}

function makeOptions(
	correct: string,
	distractors: string[]
): Pick<TechniqueQuizQuestion, 'option_a' | 'option_b' | 'option_c' | 'option_d' | 'correct_answer'> {
	const keys = ['a', 'b', 'c', 'd'] as const;
	const pool = shuffle(distractors.filter((d) => d !== correct)).slice(0, 3);
	const options = shuffle([correct, ...pool]);
	const correctIdx = options.indexOf(correct);
	return {
		option_a: options[0],
		option_b: options[1],
		option_c: options[2],
		option_d: options[3],
		correct_answer: keys[correctIdx]
	};
}

export function generateTerminologyQuestions(terms: JudoTerm[]): TechniqueQuizQuestion[] {
	const allJp = terms.map((t) => t.jp);
	const allIt = terms.map((t) => t.it);

	return terms.flatMap((term, i): TechniqueQuizQuestion[] => {
		const itToJp: TechniqueQuizQuestion = {
			id: `term-it-jp-${i}`,
			question: `Come si dice "${term.it}" in giapponese?`,
			...makeOptions(term.jp, allJp.filter((_, j) => j !== i)),
			explanation: term.explanation,
			type: 'terminology'
		};
		const jpToIt: TechniqueQuizQuestion = {
			id: `term-jp-it-${i}`,
			question: `"${term.jp}" in italiano significa:`,
			...makeOptions(term.it, allIt.filter((_, j) => j !== i)),
			explanation: term.explanation,
			type: 'terminology'
		};
		return [itToJp, jpToIt];
	});
}

export function generateGokyoQuestions(techniques: FlatTechnique[]): TechniqueQuizQuestion[] {
	const withGokyo = techniques.filter((t) => t.gokyo !== null && t.gokyo >= 1 && t.gokyo <= 5);
	if (withGokyo.length === 0) return [];

	const gokyoLabels: Record<number, string> = {
		1: '1° gruppo',
		2: '2° gruppo',
		3: '3° gruppo',
		4: '4° gruppo',
		5: '5° gruppo'
	};
	const allGroups = ['1° gruppo', '2° gruppo', '3° gruppo', '4° gruppo', '5° gruppo'];

	return withGokyo.map((t, i): TechniqueQuizQuestion => {
		const correct = gokyoLabels[t.gokyo!];
		return {
			id: `gokyo-${i}`,
			question: `A quale gruppo del Gokyo appartiene ${t.name}?`,
			...makeOptions(correct, allGroups.filter((g) => g !== correct)),
			explanation: `${t.name} appartiene al ${correct} del Gokyo no Waza.`,
			type: 'gokyo'
		};
	});
}

export function generateCategoryQuestions(
	techniques: FlatTechnique[],
	categories: string[]
): TechniqueQuizQuestion[] {
	const withCat = techniques.filter((t) => t.categoryName !== null);
	if (withCat.length === 0) return [];

	return withCat.map((t, i): TechniqueQuizQuestion => {
		const correct = t.categoryName!;
		return {
			id: `cat-${i}`,
			question: `${t.name} è una tecnica di quale tipo?`,
			...makeOptions(correct, categories.filter((c) => c !== correct)),
			explanation: `${t.name} è classificata come ${correct}.`,
			type: 'category'
		};
	});
}
