import { CreateEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class CreateEvent extends BaseEvent<CreateEventData> {
  public schema = utils.schema.createEventSchema;
}
