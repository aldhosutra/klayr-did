import * as index from '@dist/client/index';
import * as creator from '@dist/client/creator';

test('should export utils', () => {
  expect(index).toHaveProperty('utils');
  expect(index).toMatchObject(creator);
});
