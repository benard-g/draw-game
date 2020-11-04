import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { Config } from '../config/Config';
import { TotoResolver } from './resolvers/TotoResolver';

const SCHEMA_FILE_PATH = './src/graphql/schema.graphql';

export async function buildGraphqlSchema(path?: string) {
  return buildSchema({
    emitSchemaFile: path || false,
    resolvers: [TotoResolver],
  });
}

export async function createGraphqlServer(config: Config) {
  const isDevMode = config.NODE_ENV === 'development';

  const schema = await buildGraphqlSchema(
    isDevMode ? SCHEMA_FILE_PATH : undefined,
  );

  return new ApolloServer({
    schema,
    introspection: isDevMode,
    playground: isDevMode,
    tracing: isDevMode,
  });
}
