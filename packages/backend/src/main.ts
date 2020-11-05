import 'source-map-support/register';
import 'reflect-metadata';

import { loadConfig } from './config/Config';
import { Server } from './graphql/Server';

async function main(): Promise<void> {
  const config = loadConfig();

  const server = new Server();
  await server.init(config.NODE_ENV === 'development');
  const { port } = await server.start(config.PORT);

  // eslint-disable-next-line no-console
  console.log(`Server started on port "${port}"`);
}

/* istanbul ignore next */
if (require.main === module) {
  main().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
