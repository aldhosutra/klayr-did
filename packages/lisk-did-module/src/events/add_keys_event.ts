import { AddKeysEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class AddKeysEvent extends BaseEvent<AddKeysEventData> {
  public schema = utils.schema.addKeysEventSchema;
}
