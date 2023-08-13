/* eslint-disable class-methods-use-this */

import { AddServiceEndpointParam, DidModuleConfig, utils } from '@lisk-did/lisk-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'lisk-sdk';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { executeAddServiceEndpointCommand } from '../logic/add_service_endpoint';
import { AddServiceEndpointEvent } from '../events/add_service_endpoint_event';

export class AddServiceEndpointCommand extends BaseCommand {
  public schema = utils.schema.addServiceEndpointCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<AddServiceEndpointParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<AddServiceEndpointParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeAddServiceEndpointCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const addServiceEndpointEvent = this.events.get(AddServiceEndpointEvent);
      addServiceEndpointEvent.add(_context, { ..._context.params });
    }
  }
}
