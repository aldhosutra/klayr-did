/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { utils } from '@dist/index';

describe('validateDIDDocument', () => {
  it('should validate a valid DID document', () => {
    const validDIDdocument = utils.bootstrapEmptyDidDocument();
    const valid = utils.validateDIDDocument(validDIDdocument);
    expect(valid).toBeTruthy();
  });

  it('should invalidate an invalid DID document', () => {
    const validDIDdocument = { invalid: 'document' };
    const valid = utils.validateDIDDocument(validDIDdocument as any);
    expect(valid).toBeFalsy();
  });
});
