import directus from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { PUBLIC_SITE_URL } from '$env/static/public';

function url(loc: string, priority: string, changefreq = 'weekly', date: string) {
	return `<url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority><lastmod>${date}</lastmod></url>`;
}

export async function GET() {
	const date = new Date().toISOString().split('T')[0];
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
			examProgramUrls.push(url(`${site}/esami/${exam.slug}`, '0.7', 'weekly', date));
			url_programs.forEach((program) => {
				examProgramUrls.push(
					url(`${site}/esami/${exam.slug}/${program.slug}`, '0.6', 'weekly', date)
				);
			});
		});

		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url(site, '1.0', 'daily', date)}
${url(`${site}/tecniche`, '0.9', 'weekly', date)}
${url(`${site}/kata`, '0.9', 'weekly', date)}
${url(`${site}/esami`, '0.9', 'weekly', date)}
${url_techniques.map((i) => url(`${site}/tecniche/${i.slug}`, '0.8', 'weekly', date)).join('\n')}
${url_katas.map((i) => url(`${site}/kata/${i.slug}`, '0.8', 'weekly', date)).join('\n')}
${examProgramUrls.join('\n')}
</urlset>`;

		return new Response(sitemap, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch {
		return new Response('Service temporarily unavailable', {
			status: 503,
			headers: { 'Retry-After': '3600' }
		});
	}
}
