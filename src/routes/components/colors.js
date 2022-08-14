import fs from 'fs'
import { importFromStringSync } from 'module-from-string';
import resolveConfig from 'tailwindcss/resolveConfig';

export async function GET() {
	const config = tailwindConfigs();

	return {
		status: 200,
		headers: {},
		body: {
			colors: config.theme.colors,
		},
	};
}

function tailwindConfigs() {
	let configContent = fs.readFileSync('./tailwind.config.cjs').toString();

	configContent = configContent.replace('module.exports =', 'export default');

	const tailwindConfig = importFromStringSync(configContent).default;

	const config = resolveConfig(tailwindConfig);

	return config;
}
