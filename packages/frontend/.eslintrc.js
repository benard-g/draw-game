module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['only-warn'],
  ignorePatterns: ['src/services/graphql/generated.tsx'],
};
