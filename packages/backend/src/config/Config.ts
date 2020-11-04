import { getFromEnv, getNumberFromEnv } from '../utils/envUtils';

export interface Config {
  NODE_ENV: 'production' | 'test' | 'development';
  PORT: number;
}

export function loadConfig(): Config {
  return {
    NODE_ENV: getNodeEnv(),
    PORT: getNumberFromEnv('PORT', 8080),
  };
}

function getNodeEnv(): 'production' | 'test' | 'development' {
  const nodeEnv = getFromEnv('NODE_ENV', null);

  switch (nodeEnv) {
    case 'production':
      return 'production';
    case 'test':
      return 'test';
    default:
      return 'development';
  }
}
