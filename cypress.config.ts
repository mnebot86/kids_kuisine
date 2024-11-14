import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.baseUrl = process.env.BASE_URL || 'http://localhost:3000';

			return config;
		},
	},
});
