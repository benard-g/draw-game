import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { TotoResolver } from './resolvers/TotoResolver';

export class Server {
  private server: ApolloServer | undefined;

  private static readonly DEFAULT_SCHEMA_GENERATION_PATH =
    '../../schema.graphql';

  public async init(
    devMode: boolean,
    schemaGenerationPath?: string,
  ): Promise<void> {
    if (this.server) {
      throw new Error('Server already initialized');
    }

    const schema = await buildSchema({
      emitSchemaFile: devMode
        ? schemaGenerationPath || Server.DEFAULT_SCHEMA_GENERATION_PATH
        : false,
      resolvers: [TotoResolver],
    });

    this.server = new ApolloServer({
      schema,
      introspection: devMode,
      playground: devMode,
      tracing: devMode,
    });
  }

  public async start(port: number) {
    if (!this.server) {
      throw new Error('Server not initialized');
    }

    return this.server.listen(port);
  }
}
