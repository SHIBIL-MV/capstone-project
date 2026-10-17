
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: true,
    timeout: 40000,

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,

        screenshot: 'on',
        video: 'on',
        trace: 'on'
    },

    reporter: [
        ['html'],
        ['allure-playwright', {
            resultsDir: 'allure-results'
        }]
    ],

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});
