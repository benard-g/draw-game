// Mock class "ApolloServer" from apollo-server
const ApolloServer = jest.requireActual('apollo-server');
const apolloServerSpy = jest.fn().mockImplementation(() => ({}));
jest.mock('apollo-server', () => ({
  ...ApolloServer,
  ApolloServer: apolloServerSpy,
}));

import { Config } from '../../src/config/Config';
import { createGraphqlServer } from '../../src/graphql/createGraphqlServer';

describe('graphql/createGraphqlServer', () => {
  it('should correctly create a server in "dev" mode', async () => {
    const config = { NODE_ENV: 'development' } as Config;

    await createGraphqlServer(config);

    expect(apolloServerSpy).toHaveBeenCalledWith({
      schema: expect.any(Object),
      introspection: true,
      playground: true,
      tracing: true,
    });
  });

  it('should correctly create a server in "non-dev" mode', async () => {
    const config = { NODE_ENV: 'production' } as Config;

    await createGraphqlServer(config);

    expect(apolloServerSpy).toHaveBeenCalledWith({
      schema: expect.any(Object),
      introspection: false,
      playground: false,
      tracing: false,
    });
  });
});
