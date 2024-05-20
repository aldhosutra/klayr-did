import { AddControllersEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class AddControllersEvent extends BaseEvent<AddControllersEventData> {
  public schema = utils.schema.addControllersEventSchema;
}
