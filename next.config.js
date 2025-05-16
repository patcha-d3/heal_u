/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const path = require("path");
=======
const path = require('path');
>>>>>>> 3e88c315db46a8c17bb57d567e2560c5cc49eb5b

const nextConfig = {
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				loader: "@svgr/webpack",
				options: {
					typescript: true,
					dimensions: false,
				},
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

<<<<<<< HEAD
		// Add path aliases
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.join(__dirname, "./"),
			"@ui": path.join(__dirname, "./ui"),
			"@app": path.join(__dirname, "./app"),
=======
		// Add path alias resolution
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname),
>>>>>>> 3e88c315db46a8c17bb57d567e2560c5cc49eb5b
		};

		return config;
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
