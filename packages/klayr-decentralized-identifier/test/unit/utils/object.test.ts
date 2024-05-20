/* eslint-disable no-undef-init */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { utils } from '@dist/index';

describe('serializer', () => {
  it('should return undefined if data is undefined', () => {
    let obj: any = undefined;
    obj = utils.object.serializer(obj);
    expect(obj).toBeUndefined();
  });

  it('should replace bigint to string', () => {
    let obj: any = { value: BigInt(1) };
    obj = utils.object.serializer(obj);
    expect(obj.value).toBe('1');
  });

  it('should replace buffer to string', () => {
    let obj: any = { value: Buffer.from('text', 'utf8') };
    obj = utils.object.serializer(obj);
    expect(obj.value).toStrictEqual(Buffer.from('text', 'utf8').toString('hex'));
  });

  it('should replace bigint in each array to string', () => {
    let obj: any = { value: [BigInt(1)] };
    obj = utils.object.serializer(obj);
    expect(obj.value).toStrictEqual(['1']);
  });

  it('should replace buffer in each array to string', () => {
    let obj: any = { value: [Buffer.from('text', 'utf8')] };
    obj = utils.object.serializer(obj);
    expect(obj.value).toStrictEqual([Buffer.from('text', 'utf8').toString('hex')]);
  });
});

describe('encodeJSON', () => {
  it('should encode a json to a bytes', () => {
    const obj = { any: 'any' };
    const encoded = utils.object.encodeJSON(obj);
    expect(Buffer.isBuffer(encoded)).toBe(true);
  });
});

describe('decodeJSON', () => {
  it('should decode a bytes to json', () => {
    const buf = Buffer.from('5d000000020b0000000000000000309b8b9864d95a8f14df9b2a8e5affffdc8b0000', 'hex');
    const decoded = utils.object.decodeJSON(buf);
    expect(decoded).toStrictEqual({ any: 'any' });
  });
});
