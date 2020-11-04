import { readFile } from 'fs/promises';

import { buildGraphqlSchema } from '../../src/graphql/createGraphqlServer';

describe('graphql/schema', () => {
  const ORIGINAL_SCHEMA = './src/graphql/schema.graphql';
  const SCHEMA_OUTPUT_PATH = `/tmp/draw-game-tests-schema-${Date.now()}.graphql`;

  it('should be up-to-date with the definition', async () => {
    await buildGraphqlSchema(SCHEMA_OUTPUT_PATH);

    const originalSchema = await readFile(ORIGINAL_SCHEMA, 'utf-8');
    const currentSchema = await readFile(SCHEMA_OUTPUT_PATH, 'utf-8');

    expect(originalSchema).toEqual(currentSchema);
  });
});
