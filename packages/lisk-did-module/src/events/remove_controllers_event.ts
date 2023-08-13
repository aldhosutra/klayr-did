import { RemoveControllersEventData, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseEvent } from 'lisk-sdk';

export class RemoveControllersEvent extends BaseEvent<RemoveControllersEventData> {
  public schema = utils.schema.removeControllersEventSchema;
}
