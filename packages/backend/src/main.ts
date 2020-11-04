import 'source-map-support/register';
import 'reflect-metadata';

import { loadConfig } from './config/Config';
import { createGraphqlServer } from './graphql/createGraphqlServer';

async function main(): Promise<void> {
  const config = loadConfig();
  const server = await createGraphqlServer(config);

  const { port } = await server.listen(config.PORT);

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
