import directus from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { PUBLIC_SITE_URL } from '$env/static/public';

function url(loc: string, lastmod: string) {
	return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
}

export async function GET() {
	const today = new Date().toISOString().split('T')[0];
	const site = PUBLIC_SITE_URL;

	try {
		const [url_techniques, url_katas, url_exams, url_programs] = await Promise.all([
			directus.request(readItems('techniques', { fields: ['slug'], limit: -1 })),
			directus.request(readItems('kata', { fields: ['slug'], limit: -1 })),
			directus.request(readItems('exams', { fields: ['slug'], limit: -1 })),
			directus.request(readItems('programs_exam', { fields: ['slug'], limit: -1 }))
		]);

		const examProgramUrls: string[] = [];
		url_exams.forEach((exam) => {
			examProgramUrls.push(url(`${site}/esami/${exam.slug}`, today));
			url_programs.forEach((program) => {
				examProgramUrls.push(url(`${site}/esami/${exam.slug}/${program.slug}`, today));
			});
		});

		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url(site, today)}
${url(`${site}/tecniche`, today)}
${url(`${site}/kata`, today)}
${url(`${site}/esami`, today)}
${url_techniques.map((i) => url(`${site}/tecniche/${i.slug}`, today)).join('\n')}
${url_katas.map((i) => url(`${site}/kata/${i.slug}`, today)).join('\n')}
${examProgramUrls.join('\n')}
</urlset>`;

		return new Response(sitemap, {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=86400'
			}
		});
	} catch {
		const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url(site, today)}
${url(`${site}/tecniche`, today)}
${url(`${site}/kata`, today)}
${url(`${site}/esami`, today)}
</urlset>`;
		return new Response(fallback, {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	}
}
