const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');
import cucumberJson from 'wdio-cucumberjs-json-reporter';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: [
    './features/**/*.feature'
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--'+process.env.HEADLESS]
      }
    },
    {
      maxInstances: 5,
      browserName: 'firefox',
      "moz:firefoxOptions": {
        args: ['-'+process.env.HEADLESS]
      }
    },
    {
      maxInstances: 5,
      browserName: 'safari'
    },
    {
      maxInstances: 5,
      browserName: 'MicrosoftEdge',
      'ms:edgeOptions': {
        args: ['--'+process.env.HEADLESS]
      }
    }
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: process.env.HOST_URL,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: 'cucumber',
  reporters: [
      'spec',
      'cucumberjs-json'
  ],
  cucumberOpts: {
    require: ['./steps/**/*.ts'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '@ui',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  onPrepare: function () {
    removeSync('.tmp/');
  },
  afterStep: async function () {
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  },

  async beforeScenario() {
    await browser.maximizeWindow();
  },

  async afterScenario() {
    browser.deleteAllCookies();
  },

  onComplete: function() {
    generate({
      jsonDir: '.tmp/json/',
      reportPath: '.tmp/report/',
    });
  },
}
