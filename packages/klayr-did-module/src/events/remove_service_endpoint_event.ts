import { RemoveServiceEndpointEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class RemoveServiceEndpointEvent extends BaseEvent<RemoveServiceEndpointEventData> {
  public schema = utils.schema.removeServiceEndpointEventSchema;
}
