import { KeysCommand } from './keys';

export interface AddKeysParam {
  target: string;
  keys: KeysCommand[];
  signer: string;
  signature: Buffer;
}
