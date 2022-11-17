import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		// adapter: adapter()
		adapter: adapter({
			// fallback: '200.html',
			// pages: 'build',
			// assets: 'build',
			// precompress: false,
			// strict: true
			edge: false,
			split: true
		}),
	},

};

export default config;
