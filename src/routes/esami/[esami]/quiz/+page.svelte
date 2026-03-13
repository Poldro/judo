<script lang="ts">
	import { onMount } from 'svelte';
	import HeaderPages from '$lib/components/Header/HeaderPages.svelte';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
	import type { QuizQuestion } from '$lib/directus';

	export let data: { exam: { slug: string; name: string }; questions: QuizQuestion[] };

	// ── State ──────────────────────────────────────────────────────────────────
	let questions: QuizQuestion[] = [];
	let phase: 'intro' | 'question' | 'results' = 'intro';
	let currentIndex = 0;
	let selectedAnswer: string | null = null;
	let answered = false;
	let score = 0;
	let showExplanation = false;
	let animating = false;

	onMount(() => {
		// Shuffle questions client-side so order differs on each attempt
		questions = [...data.questions].sort(() => Math.random() - 0.5);
	});

	$: current = questions[currentIndex];
	$: progress = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0;
	$: finalProgress = questions.length > 0 ? (score / questions.length) * 100 : 0;

	$: resultEmoji =
		finalProgress >= 95 ? '🏆' :
		finalProgress >= 80 ? '🥇' :
		finalProgress >= 65 ? '🥈' :
		finalProgress >= 50 ? '🥉' : '💪';

	$: resultMessage =
		finalProgress >= 95 ? 'Risultato straordinario! Sei pronto per l\'esame!' :
		finalProgress >= 80 ? 'Ottima preparazione! Continua così!' :
		finalProgress >= 65 ? 'Buon risultato! Ancora un po\' di studio e ci siamo.' :
		finalProgress >= 50 ? 'Risultato sufficiente. Continua ad allenarti!' :
		'Continua a studiare, ci riuscirai!';

	// ── Options helper ─────────────────────────────────────────────────────────
	const optionLabel: Record<string, string> = { a: 'A', b: 'B', c: 'C', d: 'D' };

	function getOptions(q: QuizQuestion) {
		return [
			{ key: 'a', text: q.option_a },
			{ key: 'b', text: q.option_b },
			{ key: 'c', text: q.option_c },
			{ key: 'd', text: q.option_d }
		];
	}

	function optionState(key: string): 'neutral' | 'correct' | 'wrong' | 'missed' {
		if (!answered) return 'neutral';
		if (key === current.correct_answer) return 'correct';
		if (key === selectedAnswer) return 'wrong';
		return 'neutral';
	}

	// ── Actions ────────────────────────────────────────────────────────────────
	function startQuiz() {
		currentIndex = 0;
		score = 0;
		selectedAnswer = null;
		answered = false;
		showExplanation = false;
		phase = 'question';
	}

	function selectAnswer(key: string) {
		if (answered) return;
		selectedAnswer = key;
		answered = true;
		if (key === current.correct_answer) score++;
		// Small delay before showing explanation for dramatic effect
		setTimeout(() => { showExplanation = true; }, 300);
	}

	function nextQuestion() {
		if (animating) return;
		animating = true;
		setTimeout(() => {
			if (currentIndex + 1 >= questions.length) {
				phase = 'results';
			} else {
				currentIndex++;
				selectedAnswer = null;
				answered = false;
				showExplanation = false;
			}
			animating = false;
		}, 200);
	}

	function restart() {
		questions = [...data.questions].sort(() => Math.random() - 0.5);
		score = 0;
		currentIndex = 0;
		selectedAnswer = null;
		answered = false;
		showExplanation = false;
		phase = 'intro';
	}
</script>

<HeaderPages title="Quiz — {data.exam.name}" />
<PageContainer>
	<div class="w-full max-w-2xl">

		<!-- ── INTRO ──────────────────────────────────────────────────────── -->
		{#if phase === 'intro'}
			<div class="card border border-surface-300-600-token p-8 flex flex-col items-center gap-6 text-center animate-page-in">
				<div class="text-6xl">🎯</div>
				<div class="flex flex-col gap-2">
					<h2 class="font-bold text-2xl">{data.exam.name}</h2>
					<p class="opacity-60 text-base">Quiz di preparazione all'esame</p>
				</div>

				{#if data.questions.length === 0}
					<p class="opacity-50 text-sm">Nessuna domanda disponibile per questo esame.</p>
					<a href="/esami/{data.exam.slug}" class="btn variant-soft">← Torna all'esame</a>
				{:else}
					<div class="flex items-center gap-6 text-sm opacity-60">
						<span>📝 {data.questions.length} domande</span>
						<span>✅ Risposta multipla</span>
						<span>💡 Con spiegazioni</span>
					</div>
					<button class="btn variant-filled text-lg px-8 py-3" onclick={startQuiz}>
						Inizia il Quiz →
					</button>
					<a href="/esami/{data.exam.slug}" class="text-sm opacity-50 hover:opacity-80 transition-opacity">
						← Torna all'esame
					</a>
				{/if}
			</div>

		<!-- ── QUESTION ───────────────────────────────────────────────────── -->
		{:else if phase === 'question' && current}
			<div class="flex flex-col gap-4 animate-page-in">

				<!-- Progress header -->
				<div class="flex items-center justify-between text-sm opacity-60 px-1">
					<span>Domanda {currentIndex + 1} di {questions.length}</span>
					<span class="font-semibold">{score} corrette</span>
				</div>
				<div class="progress-bar-bg">
					<div class="progress-bar-fill" style="width: {progress}%"></div>
				</div>

				<!-- Question card -->
				<div class="card border border-surface-300-600-token p-6 flex flex-col gap-6">
					<p class="text-base font-semibold leading-relaxed">{current.question}</p>

					<!-- Options grid -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{#each getOptions(current) as { key, text }}
							{@const state = optionState(key)}
							<button
								class="option-btn"
								class:option-neutral={state === 'neutral'}
								class:option-correct={state === 'correct'}
								class:option-wrong={state === 'wrong'}
								disabled={answered}
								onclick={() => selectAnswer(key)}
							>
								<span class="option-letter">{optionLabel[key]}</span>
								<span class="flex-1 text-left text-sm leading-snug">{text}</span>
								{#if state === 'correct'}
									<span class="text-base shrink-0">✓</span>
								{:else if state === 'wrong'}
									<span class="text-base shrink-0">✗</span>
								{/if}
							</button>
						{/each}
					</div>

					<!-- Explanation -->
					{#if showExplanation && current.explanation}
						<div class="explanation-card">
							<span class="text-base">💡</span>
							<p class="text-sm leading-relaxed">{current.explanation}</p>
						</div>
					{/if}

					<!-- Next button -->
					{#if answered}
						<div class="flex justify-end">
							<button
								class="btn variant-filled"
								onclick={nextQuestion}
								disabled={animating}
							>
								{currentIndex + 1 >= questions.length ? 'Vedi risultati 🏁' : 'Prossima →'}
							</button>
						</div>
					{/if}
				</div>
			</div>

		<!-- ── RESULTS ────────────────────────────────────────────────────── -->
		{:else if phase === 'results'}
			<div
				class="card border border-surface-300-600-token p-8 flex flex-col items-center gap-6 text-center animate-page-in"
				class:result-gold={finalProgress >= 80}
			>
				<!-- Emoji + score -->
				<div class="result-emoji">{resultEmoji}</div>
				<div class="flex flex-col gap-1">
					<p class="text-5xl font-bold tabular-nums">
						{score}<span class="text-2xl opacity-40">/{questions.length}</span>
					</p>
					<p class="text-base opacity-60">{resultMessage}</p>
				</div>

				<!-- Score bar -->
				<div class="w-full max-w-xs flex flex-col gap-2">
					<div class="progress-bar-bg">
						<div
							class="progress-bar-fill"
							class:progress-bar-success={finalProgress >= 80}
							style="width: {finalProgress}%; transition: width 1s ease;"
						></div>
					</div>
					<p class="text-sm opacity-50 text-right">{Math.round(finalProgress)}%</p>
				</div>

				<!-- Breakdown (correct / wrong) -->
				<div class="flex gap-6 text-sm">
					<span class="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium">
						<span class="text-base">✓</span> {score} corrette
					</span>
					<span class="flex items-center gap-1.5 text-red-500 dark:text-red-400 font-medium">
						<span class="text-base">✗</span> {questions.length - score} errate
					</span>
				</div>

				<!-- Actions -->
				<div class="flex flex-wrap gap-3 justify-center mt-2">
					<button class="btn variant-filled px-6" onclick={restart}>
						🔄 Riprova
					</button>
					<a href="/esami/{data.exam.slug}" class="btn variant-soft px-6">
						← Torna all'esame
					</a>
				</div>
			</div>
		{/if}

	</div>
</PageContainer>

<style>
	/* ── Progress bar ───────────────────────────────────────── */
	.progress-bar-bg {
		width: 100%;
		height: 6px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-surface-500) 20%, transparent);
		overflow: hidden;
	}
	.progress-bar-fill {
		height: 100%;
		border-radius: 999px;
		background: var(--color-primary-500);
		transition: width 0.4s ease;
	}
	.progress-bar-success {
		background: var(--color-success-500, #22c55e);
	}

	/* ── Option buttons ─────────────────────────────────────── */
	.option-btn {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.875rem 1rem;
		border-radius: var(--radius-container);
		border: 1.5px solid transparent;
		cursor: pointer;
		transition: all 150ms ease;
		text-align: left;
		width: 100%;
	}
	.option-neutral {
		background: color-mix(in srgb, var(--color-surface-500) 10%, transparent);
		border-color: color-mix(in srgb, var(--color-surface-500) 25%, transparent);
		color: inherit;
	}
	.option-neutral:not(:disabled):hover {
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		border-color: var(--color-primary-400);
		transform: translateY(-1px);
	}
	.option-correct {
		background: color-mix(in srgb, #22c55e 18%, transparent);
		border-color: #22c55e;
		color: inherit;
	}
	.option-wrong {
		background: color-mix(in srgb, #ef4444 18%, transparent);
		border-color: #ef4444;
		color: inherit;
	}
	.option-btn:disabled {
		cursor: default;
	}

	.option-letter {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		font-size: 0.75rem;
		font-weight: 700;
		flex-shrink: 0;
		background: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
		color: var(--color-primary-700, var(--color-primary-500));
	}

	/* ── Explanation ────────────────────────────────────────── */
	.explanation-card {
		display: flex;
		gap: 0.75rem;
		align-items: flex-start;
		padding: 1rem;
		border-radius: var(--radius-base);
		background: color-mix(in srgb, var(--color-primary-500) 8%, transparent);
		border-left: 3px solid var(--color-primary-500);
		animation: slide-up 250ms ease both;
	}

	/* ── Results ────────────────────────────────────────────── */
	.result-emoji {
		font-size: 4rem;
		animation: bounce-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}
	.result-gold {
		background: linear-gradient(
			160deg,
			color-mix(in srgb, #f59e0b 8%, var(--color-surface-100-900)),
			var(--color-surface-100-900)
		);
	}

	/* ── Animations ─────────────────────────────────────────── */
	@keyframes slide-up {
		from { opacity: 0; transform: translateY(8px); }
		to   { opacity: 1; transform: none; }
	}
	@keyframes bounce-in {
		from { opacity: 0; transform: scale(0.5); }
		to   { opacity: 1; transform: scale(1); }
	}
</style>
