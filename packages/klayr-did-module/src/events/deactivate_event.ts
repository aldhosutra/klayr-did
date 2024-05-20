import { DeactivateEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class DeactivateEvent extends BaseEvent<DeactivateEventData> {
  public schema = utils.schema.deactivateEventSchema;
}
