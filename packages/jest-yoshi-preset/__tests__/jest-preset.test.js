const { overrideJestConfig } = require('../jest-preset');

let logSpy;

beforeEach(() => {
  logSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  logSpy.mockRestore();
});

it('should not log in case of whitelist keys', () => {
  overrideJestConfig({ globals: 'foo' }, 'e2e');
  expect(logSpy).not.toHaveBeenCalled();
});

it('should log in case of non whitelist keys', () => {
  overrideJestConfig({ globals1: 'foo' }, 'e2e');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy.mock.calls[0][0]).toMatchSnapshot();
});
