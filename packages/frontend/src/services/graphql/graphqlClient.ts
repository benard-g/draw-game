import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../../config/Config';

export const graphqlClient = new ApolloClient({
  uri: config.API_URI,
  cache: new InMemoryCache(),
});
