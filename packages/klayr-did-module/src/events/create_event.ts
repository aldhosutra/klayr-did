import { CreateEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class CreateEvent extends BaseEvent<CreateEventData> {
  public schema = utils.schema.createEventSchema;
}
