import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

// ── Primitive collections ─────────────────────────────────────────────────────

interface Global {
	author: string;
	site_language: string;
	site_title: string;
	description: string;
	site_url: string;
	contact_email: string;
	facebook_page: string;
	github_page: string;
	twitter_username: string;
	og_image: string;
}

interface Url {
	name: string;
	url: string;
	isPdf: boolean;
}

interface Video {
	url_yt: string;
	name: string;
	alt: string;
	description: string;
}

interface Technique {
	slug: string;
	name: string;
	it_name: string;
	jpn_name: string;
	description: string;
	ifj_url: string;
	sub_category_id: string;
	category_id: string;
	videos: TechniqueVideo[];
}

export interface Kata {
	slug: string;
	name: string;
	traduction_name: string;
	jpn_name: string;
	pdf_url: string;
	sort: number;
	description: string;
	videos: KataVideo[];
	urls: KataUrl[];
	techniques: Technique[];
}

interface Program {
	id: string;
	slug: string;
	name: string;
	description: string;
	description_exam: string;
	sort: number;
	content: string;
	isDynamic: boolean;
	urls: ProgramUrl[];
}

interface Exam {
	slug: string;
	name: string;
	description: string;
	type: 'dan' | 'allenatore';
	level: number | null;
	programs: Program[];
	katas: ExamKata[];
	techniques: ExamTechnique[];
	exams_programs: ExamProgram[];
}

export interface QuizQuestion {
	id: string;
	exam: string;
	question: string;
	option_a: string;
	option_b: string;
	option_c: string;
	option_d: string;
	correct_answer: 'a' | 'b' | 'c' | 'd';
	explanation: string | null;
	sort: number;
}

// ── Navigation hierarchy ──────────────────────────────────────────────────────

interface TechniqueSubCategory {
	id: string;
	name: string;
	description: string;
	techniques: Technique[];
}

interface TechniqueCategory {
	id: string;
	name: string;
	description: string;
	sub_categories: TechniqueSubCategory[];
	techniques: Technique[];
}

interface TechniqueDivision {
	id: string;
	name: string;
	description: string;
	categories: TechniqueCategory[];
}

// ── Junction (M2M) collections ────────────────────────────────────────────────
// These bridge tables are always queried with nested expansion,
// so FK fields are typed as the expanded object type.

interface TechniqueVideo {
	video_id: Video;
}

interface KataVideo {
	video_id: Video;
}

export interface KataUrl {
	url_id: Url;
}

interface ProgramUrl {
	url_id: Url;
}

export interface ExamKata {
	kata_slug: Kata;
}

export interface ExamTechnique {
	techniques_slug: Technique;
}

// ExamProgram is used in two contexts:
// - expanded: programs_exam_slug is a Program object (when querying nested fields)
// - flat ['*']: programs_exam_slug is a string FK, description_exam is a direct field
export interface ExamProgram {
	programs_exam_slug: string | Program;
	description_exam: string;
}

// ── Directus Schema ───────────────────────────────────────────────────────────

interface Schema {
	// Main collections
	techniques: Technique[];
	techniques_divisions: TechniqueDivision[];
	global: Global[];
	exams: Exam[];
	programs_exam: Program[];
	kata: Kata[];
	urls: Url[];
	videos: Video[];
	// Junction collections (Directus M2M bridge tables)
	technique_videos: TechniqueVideo[];
	kata_videos: KataVideo[];
	kata_urls: KataUrl[];
	programs_exam_urls: ProgramUrl[];
	exams_kata: ExamKata[];
	exams_techniques: ExamTechnique[];
	exams_programs_exam: ExamProgram[];
	// Navigation hierarchy sub-types
	technique_sub_categories: TechniqueSubCategory[];
	technique_categories: TechniqueCategory[];
	// Quiz
	quiz_questions: QuizQuestion[];
}

const directus = createDirectus<Schema>(PUBLIC_DIRECTUS_URL).with(rest());

export default directus;
