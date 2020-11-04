import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { Config } from '../config/Config';
import { TotoResolver } from './resolvers/TotoResolver';

export async function createGraphqlServer(config: Config) {
  const isDevMode = config.NODE_ENV === 'development';

  const schema = await buildSchema({
    resolvers: [TotoResolver],
  });

  return new ApolloServer({
    schema,
    introspection: isDevMode,
    playground: isDevMode,
    tracing: isDevMode,
  });
}
