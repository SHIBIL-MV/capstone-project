const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',
     fullyParallel: true,

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
        screenshot: 'on',
        trace: 'on'
    },

    reporter: 'html',

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});