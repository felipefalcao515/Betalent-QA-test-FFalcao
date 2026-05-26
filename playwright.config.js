const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  reporter: [
    ['list'],
    ['html']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/v1/',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    testIdAttribute: 'data-test'
  }

});