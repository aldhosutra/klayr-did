import { DeactivateEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class DeactivateEvent extends BaseEvent<DeactivateEventData> {
  public schema = utils.schema.deactivateEventSchema;
}
