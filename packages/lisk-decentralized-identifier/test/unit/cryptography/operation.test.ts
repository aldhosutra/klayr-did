/* eslint-disable @typescript-eslint/require-await */
// import { encrypt } from '@dist/cryptography/operation';
// import { createX25519KeyPair } from '@dist/cryptography/suite';

describe('test', () => {
  it('should test', async () => {
    // const publicKeyNode = {
    //   id: 'did:lisk:enevti:nft:anjaaaayyyyyyyyyy#z6LSqc7Q3MgFLWD39rLg3ZmrWcyN2SyEyVrTFVhNjERyDFkE',
    //   type: 'X25519KeyAgreementKey2020',
    //   publicKeyMultibase: 'z6LSqc7Q3MgFLWD39rLg3ZmrWcyN2SyEyVrTFVhNjERyDFkE',
    // };
    // const keyResolver = async () => {
    //   return publicKeyNode;
    // };

    // const recipient = {
    //   header: {
    //     kid: 'anjay#z6LSqc7Q3MgFLWD39rLg3ZmrWcyN2SyEyVrTFVhNjERyDFkE',
    //     alg: 'ECDH-ES+A256KW',
    //   },
    // };

    // const ito = createX25519KeyPair({
    //   // id: "did:lisk:enevti:nft:anjaaaayyyyyyyyyy#keys-1",
    //   controller: 'did:lisk:enevti:nft:anjaaaayyyyyyyyyy',
    //   publicKeyMultibase: 'z6MkeoEAtPAZKk1zLpQJMeUNeFLMPZEKDUd9ZLVLd3Z9ovHC',
    //   privateKeyMultibase:
    //     'zrv1THR4vyAaVFLjuX9C13BXw4w9dAUjy6K6nREUqmtsrxwzbUNMeyUy9QxXcBf2oDcJzJKJV1cf2B4qpvKGoHrDTCz',
    // });

    // const obj = { key: 'value' };
    // const jweDoc = await encrypt(
    //   JSON.stringify(obj),
    //   ['did:lisk:enevti:nft:anjaaaayyyyyyyyyy#z6LSqc7Q3MgFLWD39rLg3ZmrWcyN2SyEyVrTFVhNjERyDFkE'],
    //   {
    //     loader: keyResolver,
    //   },
    // );
    // jweDoc.recipients[0].header.kid = publicKeyNode.id;
    // console.log(JSON.stringify(jweDoc, null, 2));

    // const object = await cipher.decryptObject({
    //   jwe: jweDoc,
    //   keyAgreementKey: ito,
    // });

    // console.log(object);
    expect(true).toBe(true);
  });
});
