import 'source-map-support/register';

async function main(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('Hello from backend !');
}

if (require.main === module) {
  main().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
