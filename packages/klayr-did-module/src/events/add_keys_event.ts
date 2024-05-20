import { AddKeysEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class AddKeysEvent extends BaseEvent<AddKeysEventData> {
  public schema = utils.schema.addKeysEventSchema;
}
