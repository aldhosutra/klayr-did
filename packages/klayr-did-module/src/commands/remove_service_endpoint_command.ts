/* eslint-disable class-methods-use-this */

import { DidModuleConfig, RemoveServiceEndpointParam, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'klayr-sdk';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { executeRemoveServiceEndpointCommand } from '../logic/remove_service_endpoint';
import { RemoveServiceEndpointEvent } from '../events/remove_service_endpoint_event';

export class RemoveServiceEndpointCommand extends BaseCommand {
  public schema = utils.schema.removeServiceEndpointCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<RemoveServiceEndpointParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<RemoveServiceEndpointParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeRemoveServiceEndpointCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const removeServiceEndpointEvent = this.events.get(RemoveServiceEndpointEvent);
      removeServiceEndpointEvent.add(_context, { ..._context.params });
    }
  }
}
