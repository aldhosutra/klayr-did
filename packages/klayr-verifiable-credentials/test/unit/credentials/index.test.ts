import * as index from '@dist/credentials/index';
import * as credential from '@dist/credentials/credentials';
import * as presentation from '@dist/credentials/presentation';

describe('index', () => {
  it('should export credential module', () => {
    expect(index).toMatchObject(credential);
  });

  it('should export presentation module', () => {
    expect(index).toMatchObject(presentation);
  });
});
