import { Query, Resolver } from 'type-graphql';

import { Toto } from '../types/Toto';

@Resolver()
export class TotoResolver {
  @Query(() => Toto)
  async getToto(): Promise<Toto> {
    return {
      name: 'TOTO',
      description: 'This is the famous "Toto" resource',
    };
  }
}
