import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-38ca86a6.js","imports":["_app/immutable/start-38ca86a6.js","_app/immutable/chunks/index-61ce6b43.js","_app/immutable/chunks/singletons-44ff7fb1.js","_app/immutable/chunks/index-b24fc926.js","_app/immutable/chunks/supabaseClient-010fbb27.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js')
		],
		routes: [
			{
				id: "/calc/oo",
				pattern: /^\/calc\/oo\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
