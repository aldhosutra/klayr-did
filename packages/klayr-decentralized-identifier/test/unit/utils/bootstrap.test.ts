import { parseDIDComponent, utils } from '@dist/index';
import { cryptography } from 'klayr-sdk';
import { chainspace, publicKey } from '../../setup/constant';

describe('bootstrapAddressDidDocument', () => {
  it('should bootstrap a new address did document based on provided public key', async () => {
    const addressDID = await utils.bootstrapAddressDidDocument(chainspace, publicKey);
    expect(addressDID.id).toBe(
      `did:klayr:${chainspace}:address:${cryptography.address.getKlayr32AddressFromPublicKey(publicKey)}`,
    );
  });

  it('should generate a new address did document if no public key provided', async () => {
    const addressDID = await utils.bootstrapAddressDidDocument(chainspace);
    expect(parseDIDComponent(addressDID.id).chainspace).toBe(chainspace);
  });
});
