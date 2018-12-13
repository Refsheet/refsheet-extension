import * as Sentry from '@sentry/browser';
import config from '../config.json'

Sentry.init({
  dsn: config.sentry.dsn
});