import { Config } from './config';

const validConfig: Required<Config> = {
  puppeteer: {},
  bootstrap: {
    setup: async () => {},
    teardown: async () => {},
  },
  server: {
    command: 'npm run server',
    port: 3000,
  },
  overrides: { spec: {}, e2e: {} },
};

export default validConfig;
