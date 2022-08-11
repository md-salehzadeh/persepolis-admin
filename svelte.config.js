import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src/',
			$lib: 'src/lib/',
			$components: 'src/components/',
			$stores: 'src/lib/stores/',
			$templates: 'src/lib/templates/',
			$utils: 'src/lib/utils/',
			$types: 'src/types/',
			$styles: 'src/styles',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
