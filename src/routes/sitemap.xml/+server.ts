import directus from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { PUBLIC_SITE_URL } from '$env/static/public';

function url(loc: string, lastmod?: string | null) {
	const lastmodTag = lastmod ? `<lastmod>${lastmod.split('T')[0]}</lastmod>` : '';
	return `<url><loc>${loc}</loc>${lastmodTag}</url>`;
}

export async function GET() {
	const site = PUBLIC_SITE_URL;

	try {
		const [url_techniques, url_katas, url_exams] = await Promise.all([
			directus.request(readItems('techniques', { fields: ['slug', 'date_updated'], limit: -1 })),
			directus.request(readItems('kata', { fields: ['slug', 'date_updated'], limit: -1 })),
			directus.request(readItems('exams', { fields: ['slug', 'date_updated'], limit: -1 }))
		]);

		const examProgramUrls: string[] = [];
		url_exams.forEach((exam: any) => {
			examProgramUrls.push(url(`${site}/esami/${exam.slug}`, exam.date_updated));
			examProgramUrls.push(url(`${site}/esami/${exam.slug}/tecniche`));
			examProgramUrls.push(url(`${site}/esami/${exam.slug}/kata`));
			// Le pagine [static] (storia, arbitraggio, ecc.) hanno contenuto identico
			// per tutti gli esami — escluderle evita duplicate content in sitemap
		});

		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url(`${site}/`)}
${url(`${site}/tecniche`)}
${url(`${site}/kata`)}
${url(`${site}/esami`)}
${url_techniques.map((i) => url(`${site}/tecniche/${i.slug}`, i.date_updated)).join('\n')}
${url_katas.map((i) => url(`${site}/kata/${i.slug}`, i.date_updated)).join('\n')}
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
${url(`${site}/`)}
${url(`${site}/tecniche`)}
${url(`${site}/kata`)}
${url(`${site}/esami`)}
</urlset>`;
		return new Response(fallback, {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	}
}
