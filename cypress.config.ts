import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		projectId: '3gt71s',
		setupNodeEvents(on, config) {
			config.baseUrl = process.env.BASE_URL || 'http://localhost:3005';

			return config;
		},
	},
});
