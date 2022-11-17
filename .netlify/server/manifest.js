export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c9db4b4c.js","imports":["_app/immutable/start-c9db4b4c.js","_app/immutable/chunks/index-61ce6b43.js","_app/immutable/chunks/singletons-12f963a0.js","_app/immutable/chunks/index-b24fc926.js","_app/immutable/chunks/supabaseClient-010fbb27.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/calc",
				pattern: /^\/calc\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/calc/oo",
				pattern: /^\/calc\/oo\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/forms",
				pattern: /^\/forms\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/forms/contract",
				pattern: /^\/forms\/contract\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/forms/maintenance-checklist",
				pattern: /^\/forms\/maintenance-checklist\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/labs",
				pattern: /^\/labs\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/labs/color",
				pattern: /^\/labs\/color\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/labs/jslabs",
				pattern: /^\/labs\/jslabs\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/labs/jslabs/float",
				pattern: /^\/labs\/jslabs\/float\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
