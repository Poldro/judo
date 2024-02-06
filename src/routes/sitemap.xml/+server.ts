import directus from "$lib/directus";
import { readItems } from "@directus/sdk";

let date = new Date().toISOString().split('T')[0];

export async function GET({ setHeaders }) {
    setHeaders({
        'Content-Type': 'application/xml'
    });

    const site = 'https://judo.poldro.eu';

    const url_techniques = await directus.request(readItems('techniques', {
        fields: ['slug']
    }));

    const url_katas = await directus.request(readItems('kata', {
        fields: ['slug']
    }));

    const url_exams = await directus.request(readItems('exams', {
        fields: ['slug']
    }));

    const url_programs = await directus.request(readItems('programs_exam', {
        fields: ['slug']
    }));

    // Validate fetches
    if (!url_techniques || url_techniques.length <= 0 || !url_katas || url_katas.length <= 0 || !url_exams || url_exams.length <= 0 || !url_programs || url_programs.length <= 0) {
        throw new Error('Failed to fetch urls.');
    }

    function generateExamProgramPaths() {
        let paths: string[] = [];
        url_exams.forEach(exam => {
            url_programs.forEach(program => {
                paths.push(`
<url>
    <loc>${site}/esami/${exam.slug}/programmi/${program.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${date}</lastmod>
</url>`);
            });
        });
        return paths.join('');
    }

    const examProgramPaths = generateExamProgramPaths();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
</url>
${url_techniques.map(item => `
<url>
    <loc>${site}/tecniche/${item.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${date}</lastmod>
</url>`).join('')}
${url_katas.map(item => `
<url>
    <loc>${site}/kata/${item.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${date}</lastmod>
</url>`).join('')}
${examProgramPaths}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
