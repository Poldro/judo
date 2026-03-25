import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET() {
	return new Response(`User-agent: *\nAllow: /\nSitemap: ${PUBLIC_SITE_URL}/sitemap.xml`, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
