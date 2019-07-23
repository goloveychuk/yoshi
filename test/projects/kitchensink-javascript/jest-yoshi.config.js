module.exports = {
  server: {
    command: 'node index.js',
    port: 3100,
  },
  overrides: {
    e2e: {
      globals: {
        foo: 'bar',
      },
    },
    spec: {
      globals: {
        foo: 'bar',
      },
    },
  },
};
