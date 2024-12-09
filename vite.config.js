import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";

export default defineConfig({
	plugins: [
		webExtension({
			manifest: "manifest.json", // Path to your Firefox manifest file
		}),
	],
	build: {
		outDir: "dist", // Directory for bundled files
		rollupOptions: {
			input: {
				content: "content_scripts/content.js", // Entry point for content script
			},
			output: {
				entryFileNames: "content.js", // Output file names
			},
		},
	},
});
