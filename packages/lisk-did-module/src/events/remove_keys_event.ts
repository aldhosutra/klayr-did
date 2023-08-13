import { RemoveKeysEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class RemoveKeysEvent extends BaseEvent<RemoveKeysEventData> {
  public schema = utils.schema.removeKeysEventSchema;
}
