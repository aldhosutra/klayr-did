import * as did from '@lisk-did/lisk-decentralized-identifier';
import * as vc from '@lisk-did/lisk-verifiable-credentials';
import { DidModule } from '@lisk-did/lisk-did-module';
import * as index from '@dist/index';

describe('index', () => {
  it('should export @lisk-did/lisk-decentralized-identifier module as did', () => {
    expect(index).toHaveProperty('did');
    expect(index.did).toStrictEqual(did);
  });

  it('should export @lisk-did/lisk-verifiable-credentials module as vc', () => {
    expect(index).toHaveProperty('vc');
    expect(index.vc).toStrictEqual(vc);
  });

  it('should export DidModule from @lisk-did/lisk-did-module', () => {
    expect(index).toHaveProperty('DidModule');
    expect(index.DidModule).toStrictEqual(DidModule);
  });
});
