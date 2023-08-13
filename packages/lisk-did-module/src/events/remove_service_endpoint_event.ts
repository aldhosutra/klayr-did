import { RemoveServiceEndpointEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class RemoveServiceEndpointEvent extends BaseEvent<RemoveServiceEndpointEventData> {
  public schema = utils.schema.removeServiceEndpointEventSchema;
}
