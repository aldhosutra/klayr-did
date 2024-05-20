import * as did from '@klayr-did/klayr-decentralized-identifier';
import * as vc from '@klayr-did/klayr-verifiable-credentials';
import { DidModule } from '@klayr-did/klayr-did-module';
import * as index from '@dist/index';

describe('index', () => {
  it('should export @klayr-did/klayr-decentralized-identifier module as did', () => {
    expect(index).toHaveProperty('did');
    expect(index.did).toStrictEqual(did);
  });

  it('should export @klayr-did/klayr-verifiable-credentials module as vc', () => {
    expect(index).toHaveProperty('vc');
    expect(index.vc).toStrictEqual(vc);
  });

  it('should export DidModule from @klayr-did/klayr-did-module', () => {
    expect(index).toHaveProperty('DidModule');
    expect(index.DidModule).toStrictEqual(DidModule);
  });
});
