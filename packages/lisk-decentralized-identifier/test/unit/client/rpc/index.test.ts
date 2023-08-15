import * as index from '@dist/client/rpc';

test('should export DIDClient class', () => {
  expect(index).toHaveProperty('DIDClient');
});
