import { AddControllersEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class AddControllersEvent extends BaseEvent<AddControllersEventData> {
  public schema = utils.schema.addControllersEventSchema;
}
