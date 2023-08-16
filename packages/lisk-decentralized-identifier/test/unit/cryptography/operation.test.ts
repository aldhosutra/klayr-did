/* eslint-disable @typescript-eslint/require-await */
// import { decrypt, encrypt } from '@dist/cryptography/operation';
import { encrypt } from '@dist/cryptography/operation';
import { senderDID, senderKAKey } from '../../setup/constant';
// import { createX25519KeyPair } from '@dist/cryptography/suite';

describe('test', () => {
  it('should test', async () => {
    // console.log(await utils.bootstrapAddressDidDocument(chainspace, publicKey));
    const publicKeyNode = {
      id: senderKAKey,
      type: 'X25519KeyAgreementKey2020',
      controller: senderDID,
      publicKeyMultibase: 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
    };
    const keyResolver = async () => {
      return publicKeyNode;
    };

    // const encrypted = {
    //   protected: 'eyJlbmMiOiJYQzIwUCJ9',
    //   recipients: [
    //     {
    //       header: {
    //         kid: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4tundefined#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
    //         alg: 'ECDH-ES+A256KW',
    //         epk: {
    //           kty: 'OKP',
    //           crv: 'X25519',
    //           x: '4QYRl-ZGAGIQf8VnEMgDkOLpvUkUWDXg4aRK9uDMmB8',
    //         },
    //         apu: '4QYRl-ZGAGIQf8VnEMgDkOLpvUkUWDXg4aRK9uDMmB8',
    //         apv: 'ZGlkOmxpc2s6dGVzdDphZGRyZXNzOmxza205dHp5emNwNDhicTM5NHhmenQyeHBhbjZqaGJ1b3NzaDdrajR0I3o2TFNnZXd4S0s2dlBIMU5HanA1VXBHRnFVMXg5NFZFdHZRZkd4NFcxVEhaV1N4ZQ',
    //       },
    //       encrypted_key: '2NKhqgOjBTSqz21FXYKoGRMYEJfLQMDXkggOpyeruoXgdkGn3QBXMQ',
    //     },
    //   ],
    //   iv: 'CIlcF38NRuzna96X9M8vBMQGLvPqMzJh',
    //   ciphertext: 'rQ1xqUhBOsZQ5AeTrTJI',
    //   tag: 'Y0jylsIsv6yNM_oSAUPUtQ',
    // };

    // const recipient = {
    //   header: {
    //     kid: 'anjay#z6LSqc7Q3MgFLWD39rLg3ZmrWcyN2SyEyVrTFVhNjERyDFkE',
    //     alg: 'ECDH-ES+A256KW',
    //   },
    // };

    const obj = { key: 'value' };
    const jweDoc = await encrypt(JSON.stringify(obj), [senderKAKey], {
      loader: keyResolver,
    });
    // jweDoc.recipients[0].header.kid = publicKeyNode.id;
    console.log(JSON.stringify(jweDoc, null, 2));

    // const object = await decrypt(encrypted, senderKAKey, privateKey, { ipc });

    // console.log(object);
    expect(true).toBe(true);
  });
});
