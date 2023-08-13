import { AddServiceEndpointEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class AddServiceEndpointEvent extends BaseEvent<AddServiceEndpointEventData> {
  public schema = utils.schema.addServiceEndpointEventSchema;
}
