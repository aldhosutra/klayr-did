import { AddServiceEndpointEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class AddServiceEndpointEvent extends BaseEvent<AddServiceEndpointEventData> {
  public schema = utils.schema.addServiceEndpointEventSchema;
}
