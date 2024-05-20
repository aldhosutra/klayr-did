/* eslint-disable import/no-extraneous-dependencies */
import { utils } from 'klayr-sdk';
import { CREDENTIALS_CONTEXT_V1_URL as vcUrl } from 'credentials-context';
import { preprocessCredentials } from '@dist/util';
import { VerifiableCredential } from '@dist/types';
import { credential } from '../../setup/constant';

describe('preprocessCredentials', () => {
  it('should add @context automatically if not present', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential['@context'] = undefined;
    preprocessCredentials(copyCredential);
    expect(copyCredential['@context']).toContain(vcUrl);
  });

  it('should unshift @context automatically if not present', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential['@context'] = ['anything://other.than/required'];
    preprocessCredentials(copyCredential);
    expect(copyCredential['@context']).toContain(vcUrl);
    expect(copyCredential['@context'][0]).toBe(vcUrl);
  });

  it('should change its type to string array if string is provided', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential['@context'] = 'anything://other.than/required';
    preprocessCredentials(copyCredential);
    expect(copyCredential['@context']).toStrictEqual([vcUrl]);
  });

  it('should order @context automatically if not ordered accordingly', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential['@context'] = ['anything://other.than/required', vcUrl];
    preprocessCredentials(copyCredential);
    expect(copyCredential['@context']).toContain(vcUrl);
    expect(copyCredential['@context'][0]).toBe(vcUrl);
  });

  it('should add type automatically if not present', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential.type = undefined as any;
    preprocessCredentials(copyCredential);
    expect(copyCredential.type).toContain('VerifiableCredential');
  });

  it('should order type automatically if not ordered accordingly', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential.type = ['OtherCredentialType', 'VerifiableCredential'];
    preprocessCredentials(copyCredential);
    expect(copyCredential.type).toContain('VerifiableCredential');
    expect(copyCredential.type[0]).toBe('VerifiableCredential');
  });

  it('should add issuance date', () => {
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDateObject);

    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential.issuanceDate = undefined as any;
    preprocessCredentials(copyCredential);
    expect(copyCredential.issuanceDate).toBeDefined();
    expect(copyCredential.issuanceDate).toBe(mockDateObject.toISOString());
  });

  it('should add id with sha256 urn', () => {
    const copyCredential = utils.objects.cloneDeep(credential) as VerifiableCredential;
    copyCredential.id = undefined as any;
    preprocessCredentials(copyCredential);
    expect(copyCredential.id).toBeDefined();
    expect(copyCredential.id).toBe('urn:sha256:63f56ba7eb676e0303dd5edb94c3c350c407161ab5b7765c968b22012bd65ec7');
  });
});
