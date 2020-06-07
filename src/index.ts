import { getLogger } from './common';

const logger = getLogger('bootstrap');

async function bootstrap(): Promise<void> {
  console.log('hello world');
}

bootstrap().catch((error) => {
  logger.error('An unhandled exception occured', {
    error,
  });
  process.exit();
});
