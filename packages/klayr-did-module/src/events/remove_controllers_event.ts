import { RemoveControllersEventData, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseEvent } from 'klayr-sdk';

export class RemoveControllersEvent extends BaseEvent<RemoveControllersEventData> {
  public schema = utils.schema.removeControllersEventSchema;
}
