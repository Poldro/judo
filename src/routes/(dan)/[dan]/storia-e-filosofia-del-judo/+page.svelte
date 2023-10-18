<script>
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import Container from '$lib/components/Container/Container.svelte';
</script>

<Container>
	<div class="space-y-4 lg:space-y-6 flex flex-col items-center justify-center mx-4">
		<div class="max-w-2xl flex flex-col items-center">
			<div class="card p-4 lg:p-6 sm:max-w-xs w-full">
				<TableOfContents />
			</div>
			<div use:tocCrawler={{ mode: 'generate' }}>
				<div class="max-w-3xl text-base leading-7">
					<h2 class="text-center h2 my-16" data-toc-ignore>
						<strong>JU</strong> = cedevolezza <strong>DO</strong>=via spirituale.
					</h2>
					<h2 class="mt-16 h2 text-primary-500">Cos'è</h2>
					<p class="mt-6">
						Il judo non è solo un’arte marziale ma un metodo educativo creato dal Maestro Jigoro
						Kano. Il judo si appoggia sullo studio e la pratica di un procedimento di attacco e
						difesa, ispirato da arti marziali giapponesi (ju-jitsu) che privilegiano le tecniche di
						proiezione e di controllo. Lo scopo è di destabilizzare l’avversario usando i suoi
						movimenti e la sua forza attraverso delle tecniche di caduta, immobilizzazione a terra,
						strangolamenti e chiavi articolari.
					</p>

					<p class="mt-10">
						Inoltre, la pratica costante e regolare, guidata dai principi filosofici e dal rispetto
						dei suoi fondamenti, favorisce l’autonomia, la padronanza di sé, il rispetto degli
						altri, e una migliore qualità di vita. Infatti, l’UNESCO ha dichiarato lo sport del judo
						come migliore attività fisica per bambini e ragazzi dai 4 ai 21 anni in quanto promuove
						un’educazione fisica completa.
					</p>
					<p class="mt-10">
						Il judo era previsto nel programma dei giochi Olimpici del 1940 che però furono
						annullati a causa della guerra mondiale. Tuttavia, nel 1964, il judo fa ingresso per la
						prima volta nei Giochi Olimpici di Tokyo e, 40 anni dopo, ad Atene 2004, diventa il
						terzo sport più diffuso dell’Olimpiade con atleti provenienti da 98 Paesi.
					</p>

					<p class="mt-10">
						Contrariamente al karate, con il quale lo si confonde, lo scopo del judo è di far cadere
						il partner e riuscire ad immobilizzarlo schiena a terra impedendogli di rigirarsi sulla
						pancia, controllandolo e assicurandosi però che non si faccia male. Infatti, nessun
						colpo è previsto perché l’obiettivo della tecnica di judo non è di fare male.
					</p>

					<p class="mt-10">
						Il fondatore è il maestro Jigoro Kano (1860- 1938). “Il judo è un metodo efficace per
						acquisire forza fisica e mentale. Infatti, fare judo significa maturare consapevolezza
						del corpo e dello spirito attraverso l’addestramento attacco-difesa e l’assiduo sforzo
						per ottenere un miglioramento fisico e spirituale. Il perfezionamento dell’io così
						ottenuto dovrà essere indirizzato al servizio sociale, che costituisce l’obiettivo
						ultimo del Judo”. Così definiva nel 1916 il professor Jigoro Kano la disciplina che
						codificò (Judo) partendo dal ju-jitsu.
					</p>

					<h2 class="mt-16 h2 text-primary-500">Storia</h2>
					<p class="mt-6">
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
						ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
						Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
						ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
					</p>

					<p class="mt-10">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
						semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
						viverra tellus varius sit neque erat velit.
					</p>

					<h2 class="mt-16 h2 text-primary-500">Filosofia e Codice Morale</h2>
					<p class="mt-6">
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
						ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
						Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
						ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
					</p>

					<p class="mt-10">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
						semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
						viverra tellus varius sit neque erat velit.
					</p>

					<h2 class="mt-16 h2 text-primary-500">Principi Essenziali</h2>
					<p class="mt-6">
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
						ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
						Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
						ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
					</p>

					<p class="mt-10">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
						semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
						viverra tellus varius sit neque erat velit.
					</p>


			
				</div>
			</div>
		</div>
	</div>
</Container>
