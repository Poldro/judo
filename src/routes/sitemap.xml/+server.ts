import directus from "$lib/server/directus";
import { readItems } from "@directus/sdk";
import { PUBLIC_SITE_URL } from '$env/static/public';

const date = new Date().toISOString().split('T')[0];

function url(loc: string, priority: string, changefreq = 'weekly') {
    return `<url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority><lastmod>${date}</lastmod></url>`;
}

export async function GET({ setHeaders }) {
    setHeaders({ 'Content-Type': 'application/xml' });

    const site = PUBLIC_SITE_URL;

    const [url_techniques, url_katas, url_exams, url_programs] = await Promise.all([
        directus.request(readItems('techniques', { fields: ['slug'] })),
        directus.request(readItems('kata', { fields: ['slug'] })),
        directus.request(readItems('exams', { fields: ['slug'] })),
        directus.request(readItems('programs_exam', { fields: ['slug'] })),
    ]);

    const examProgramUrls: string[] = [];
    url_exams.forEach(exam => {
        examProgramUrls.push(url(`${site}/esami/${exam.slug}`, '0.7'));
        url_programs.forEach(program => {
            examProgramUrls.push(url(`${site}/esami/${exam.slug}/${program.slug}`, '0.6'));
        });
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url(site, '1.0', 'daily')}
${url(`${site}/tecniche`, '0.9', 'weekly')}
${url(`${site}/kata`, '0.9', 'weekly')}
${url(`${site}/esami`, '0.9', 'weekly')}
${url_techniques.map(i => url(`${site}/tecniche/${i.slug}`, '0.8')).join('\n')}
${url_katas.map(i => url(`${site}/kata/${i.slug}`, '0.8')).join('\n')}
${examProgramUrls.join('\n')}
</urlset>`;

    return new Response(sitemap);
}
