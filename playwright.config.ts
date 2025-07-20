import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config={
  testDir: './tests',
 timeout:60 *100,
 expect:{
  timeout:50*100
 },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browsername:'chromium',
    headless:false,
  
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
};
module.exports=config;