/** @type {import('next').NextConfig} */
const path = require("path");

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

		// Add path aliases
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.join(__dirname, "./"),
			"@ui": path.join(__dirname, "./ui"),
			"@app": path.join(__dirname, "./app"),
		};

		return config;
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
