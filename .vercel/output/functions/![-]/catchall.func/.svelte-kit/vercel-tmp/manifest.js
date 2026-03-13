export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["J_Esami Regionali di Graduazione 2023.pdf","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.png","fonts/WorkSans-Bold.woff2","fonts/WorkSans-Light.woff2","fonts/WorkSans-Medium.woff2","fonts/WorkSans-Regular.woff2","fonts/WorkSans-SemiBold.woff2","fonts/WorkSans-Thin.woff2","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".woff2":"font/woff2",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DMar78np.js",app:"_app/immutable/entry/app.DLZxctHy.js",imports:["_app/immutable/entry/start.DMar78np.js","_app/immutable/chunks/DXJoH3ey.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/entry/app.DLZxctHy.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/chunks/BUeP24Xp.js","_app/immutable/chunks/Dmvgr_CA.js","_app/immutable/chunks/BeEhkBP_.js","_app/immutable/chunks/BgESRIHj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/esami",
				pattern: /^\/esami\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/esami/[esami]",
				pattern: /^\/esami\/([^/]+?)\/?$/,
				params: [{"name":"esami","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/esami/[esami]/kata",
				pattern: /^\/esami\/([^/]+?)\/kata\/?$/,
				params: [{"name":"esami","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/esami/[esami]/tecniche",
				pattern: /^\/esami\/([^/]+?)\/tecniche\/?$/,
				params: [{"name":"esami","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/esami/[esami]/[static]",
				pattern: /^\/esami\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"esami","optional":false,"rest":false,"chained":false},{"name":"static","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/kata",
				pattern: /^\/kata\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/kata/[slug]",
				pattern: /^\/kata\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/tecniche",
				pattern: /^\/tecniche\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/tecniche/[slug]",
				pattern: /^\/tecniche\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
