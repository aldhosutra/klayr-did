import * as index from '@dist/index';

test('should export utils', () => {
  expect(index).toHaveProperty('utils');
  expect(index).toHaveProperty('client');
  expect(index).toHaveProperty('cryptography');
  expect(index).toHaveProperty('resolver');
  expect(index).toHaveProperty('getDIDDocument');
  expect(index).toHaveProperty('getAddressDIDFromPublicKey');
  expect(index).toHaveProperty('parseDIDComponent');
});
