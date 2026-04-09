import directus from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET() {
	const site = PUBLIC_SITE_URL;

	try {
		const [divisions, katas, exams, programs] = await Promise.all([
			directus.request(
				readItems('techniques_divisions', {
					fields: [
						'name',
						{
							categories: [
								'name',
								{ techniques: ['slug', 'name', 'jpn_name', 'it_name'] },
								{ sub_categories: ['name', { techniques: ['slug', 'name', 'jpn_name', 'it_name'] }] }
							]
						}
					],
					limit: -1
				})
			),
			directus.request(
				readItems('kata', {
					fields: ['slug', 'name', 'jpn_name', 'traduction_name', 'description'],
					sort: ['sort'],
					limit: -1
				})
			),
			directus.request(
				readItems('exams', {
					fields: ['slug', 'name', 'type', 'level'],
					limit: -1
				})
			),
			directus.request(
				readItems('programs_exam', {
					fields: ['slug', 'name', 'description'],
					limit: -1
				})
			)
		]);

		const danExams = exams.filter((e) => !e.type || e.type === 'dan');
		const coachExams = exams.filter((e) => e.type === 'allenatore');

		const lines: string[] = [];

		lines.push(`# Judo Italia - Riferimento Tecnico`);
		lines.push('');
		lines.push(
			`> Riferimento tecnico per judoka italiani: tecniche ufficiali IJF, forme codificate dei kata del Kodokan e programmi d'esame federale per cintura nera e Allenatore.`
		);
		lines.push('');
		lines.push(
			`Il sito è rivolto a studenti, insegnanti e appassionati di judo che si preparano agli esami di graduazione o vogliono approfondire la tecnica. Tutti i contenuti sono in italiano.`
		);
		lines.push('');

		// Sezioni principali
		lines.push(`## Sezioni principali`);
		lines.push('');
		lines.push(`- [Tecniche IJF](${site}/tecniche): Catalogo completo nage-waza e katame-waza`);
		lines.push(`- [Kata](${site}/kata): Forme codificate del Kodokan`);
		lines.push(`- [Esami](${site}/esami): Programmi d'esame DAN e da Allenatore`);
		lines.push('');

		// Tecniche per divisione/categoria
		lines.push(`## Tecniche IJF`);
		lines.push('');
		lines.push(
			`Catalogo delle tecniche ufficiali della International Judo Federation (IJF), suddivise in nage-waza (tecniche di lancio) e katame-waza (tecniche di controllo a terra).`
		);
		lines.push('');

		for (const division of divisions as any[]) {
			lines.push(`### ${division.name}`);
			lines.push('');
			for (const category of division.categories ?? []) {
				const directTechs: any[] = category.techniques ?? [];
				const subs: any[] = category.sub_categories ?? [];

				if (directTechs.length > 0) {
					lines.push(`#### ${category.name}`);
					for (const t of directTechs) {
						const label = t.it_name ? `${t.name} (${t.jpn_name}) — ${t.it_name}` : `${t.name} (${t.jpn_name})`;
						lines.push(`- [${label}](${site}/tecniche/${t.slug})`);
					}
					lines.push('');
				} else if (subs.length > 0) {
					lines.push(`#### ${category.name}`);
					for (const sub of subs) {
						lines.push(`##### ${sub.name}`);
						for (const t of sub.techniques ?? []) {
							const label = t.it_name ? `${t.name} (${t.jpn_name}) — ${t.it_name}` : `${t.name} (${t.jpn_name})`;
							lines.push(`- [${label}](${site}/tecniche/${t.slug})`);
						}
						lines.push('');
					}
				}
			}
		}

		// Kata
		lines.push(`## Kata del Kodokan`);
		lines.push('');
		lines.push(
			`Le forme codificate del judo. Ogni kata è una sequenza fissa di tecniche studiata per la pratica tradizionale e richiesta negli esami.`
		);
		lines.push('');
		for (const kata of katas as any[]) {
			const desc = kata.description
				? ' — ' + kata.description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120)
				: '';
			lines.push(`- [${kata.name} (${kata.jpn_name}) — ${kata.traduction_name}](${site}/kata/${kata.slug})${desc}`);
		}
		lines.push('');

		// Esami DAN
		if (danExams.length > 0) {
			lines.push(`## Esami Cintura Nera (DAN)`);
			lines.push('');
			lines.push(
				`Programmi ufficiali degli esami di graduazione federale per cintura nera, con tecniche richieste, kata e prove teoriche.`
			);
			lines.push('');
			for (const exam of danExams) {
				lines.push(`- [${exam.name}](${site}/esami/${exam.slug})`);
			}
			lines.push('');
		}

		// Esami Allenatore
		if (coachExams.length > 0) {
			lines.push(`## Esami da Allenatore`);
			lines.push('');
			lines.push(`Programmi degli esami per la qualifica federale di Allenatore di Judo Italia.`);
			lines.push('');
			for (const exam of coachExams) {
				lines.push(`- [${exam.name}](${site}/esami/${exam.slug})`);
			}
			lines.push('');
		}

		// Programmi d'esame
		if (programs.length > 0) {
			lines.push(`## Programmi d'esame`);
			lines.push('');
			lines.push(`Moduli tematici che compongono i programmi d'esame: tecniche specifiche, kata richiesti, regolamento.`);
			lines.push('');
			for (const program of programs as any[]) {
				const desc = program.description ? ': ' + program.description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 100) : '';
				lines.push(`- ${program.name}${desc}`);
			}
			lines.push('');
		}

		return new Response(lines.join('\n'), {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'public, max-age=86400'
			}
		});
	} catch (e) {
		return new Response('# Judo Italia\n\n> Riferimento tecnico per judoka italiani.\n\n- [Tecniche](' + site + '/tecniche)\n- [Kata](' + site + '/kata)\n- [Esami](' + site + '/esami)\n', {
			headers: { 'Content-Type': 'text/plain; charset=utf-8' }
		});
	}
}
