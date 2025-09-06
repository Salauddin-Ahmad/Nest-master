// Import with `const Sentry = require("@sentry/nestjs");` if you are using CJS
import * as Sentry from '@sentry/nestjs';

Sentry.init({
  dsn: 'https://0c9172c0a100731ede3a8321ec099679@o4507544004853760.ingest.de.sentry.io/4509855165710416',

  enableLogs: true,

  integrations: [
    Sentry.consoleLoggingIntegration({
      levels: ['log', 'warn', 'error'],
    }),
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
