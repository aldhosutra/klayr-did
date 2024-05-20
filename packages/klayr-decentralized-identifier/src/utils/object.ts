import { JSONObject } from 'klayr-sdk';
import * as jsonpack from 'jsonpack';
import * as lzma from 'lzma';

export function encodeJSON(json: Record<string, any>): Buffer {
  return Buffer.from(lzma.compress(jsonpack.pack(json), 9));
}

export function decodeJSON<T>(jsonByte: Buffer): T {
  return jsonpack.unpack<T>(lzma.decompress(jsonByte));
}

export function serializer<T>(data: Record<any, any>): JSONObject<T> {
  if (data === undefined) return data;
  return JSON.parse(
    JSON.stringify(data, (_, value) => {
      if (Array.isArray(value)) {
        return value.map(item => replacer(item));
      }
      return replacer(value);
    }),
  );
}

function replacer(value: any) {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  if (value.type === 'Buffer') {
    return Buffer.from(value).toString('hex');
  }
  return value;
}
