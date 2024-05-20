import { KeysCommand } from './keys';

export interface CreateParam {
  did: string;
  keys: KeysCommand[];
  controllers: string[];
}
