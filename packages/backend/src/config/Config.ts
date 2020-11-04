export interface Config {
  NODE_ENV: 'production' | 'test' | 'development';

  PORT: number;
}

export function loadConfig(): Config {
  // TODO: load from env
  return {
    NODE_ENV: 'development',

    PORT: 8080,
  };
}
