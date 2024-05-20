import { RemoveKeysEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class RemoveKeysEvent extends BaseEvent<RemoveKeysEventData> {
  public schema = utils.schema.removeKeysEventSchema;
}
