import * as index from '@dist/codec/index';
import * as credential from '@dist/codec/credentials';
import * as presentation from '@dist/codec/presentation';
import * as proof from '@dist/codec/proof';

describe('index', () => {
  it('should export credential module', () => {
    expect(index).toMatchObject(credential);
  });

  it('should export presentation module', () => {
    expect(index).toMatchObject(presentation);
  });

  it('should export proof module', () => {
    expect(index).toMatchObject(proof);
  });
});
