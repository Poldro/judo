<script>
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import LogoClouds from '$lib/components/List/LogoClouds.svelte';
	import { links_utili } from '$lib/content/storia-link-utili';
	import PageContainer from '$lib/components/Container/PageContainer.svelte';
</script>

<PageContainer>
		<div class="max-w-4xl w-full">
			<LogoClouds items= {links_utili} />
			</div>
		<div class="max-w-4xl flex flex-col items-center">
		<!-- 	<div class="card p-4 lg:p-6 sm:max-w-xs w-full">
				<TableOfContents />
			</div> -->
			<div use:tocCrawler={{ mode: 'generate' }}>
				<div class="max-w-3xl text-base leading-7">
					<h2 class="text-center h2 my-16" data-toc-ignore>
						<strong>JU</strong> = cedevolezza <strong>DO</strong>=via spirituale.
					</h2>
					<h2 class="mt-16 h2 text-primary-500">Cos'è</h2>
					<p class="mt-6">
						Il Judo è un'arte marziale e sport di combattimento giapponese che è nato alla fine del
						XIX secolo. Creato da Jigoro Kano, il Judo è più di una semplice disciplina fisica; è
						anche una pratica filosofica che insegna il rispetto per se stessi e per gli altri.
					</p>

					<h2 class="mt-16 h2 text-primary-500">Storia</h2>
					<p class="mt-6">
						Jigoro Kano, nato nel 1860, è stato il fondatore del Judo. Egli combinò elementi di
						diverse arti marziali giapponesi esistenti, come il Jujutsu, per creare una nuova
						disciplina. Nel 1882, Kano aprì la sua prima scuola, il Kodokan, dove iniziò a insegnare
						il Judo come metodo per migliorare sia il corpo che la mente.
					</p>

					<h3 class="mt-10 h3 text-primary-500">Diffusione Globale</h3>

					<p class="mt-6">
						Nel XX secolo, il Judo divenne popolare a livello internazionale, culminando nella sua
						inclusione come sport olimpico nel 1964. Oggi è praticato in tutto il mondo e ha fedeli
						seguaci in ogni continente.
					</p>

					<h2 class="mt-16 h2 text-primary-500">Filosofia</h2>
					<p class="mt-6">
						Il Judo si basa su due concetti filosofici principali: "Seiryoku Zen'yo" (Massima
						efficacia con minimo sforzo) e "Jita Kyoei" (Benessere e beneficio reciproco).
					</p>
					<h3 class="mt-10 h3 text-primary-500">Seiryoku Zen'yo</h3>
					<p class="mt-6">
						Questo principio insegna che ogni azione, sia essa fisica che mentale, dovrebbe essere
						eseguita nel modo più efficiente possibile. Si tratta di utilizzare la leva, il
						bilanciamento e la tecnica per sconfiggere un avversario, piuttosto che la forza bruta.
					</p>
					<h3 class="mt-10 h3 text-primary-500">Jita Kyoei</h3>
					<p class="mt-6">
						Il secondo principio, Jita Kyoei, promuove il concetto che il progresso individuale è
						legato al benessere della comunità. In pratica, questo significa rispetto, cortesia e
						collaborazione con gli altri.
					</p>
				</div>
			</div>
		</div>
</PageContainer>
