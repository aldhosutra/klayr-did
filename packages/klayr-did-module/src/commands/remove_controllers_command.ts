/* eslint-disable class-methods-use-this */

import { DidModuleConfig, RemoveControllersParam, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'klayr-sdk';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { executeRemoveControllersCommand } from '../logic/remove_controllers';
import { RemoveControllersEvent } from '../events/remove_controllers_event';

export class RemoveControllersCommand extends BaseCommand {
  public schema = utils.schema.removeControllersCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<RemoveControllersParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<RemoveControllersParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeRemoveControllersCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const removeControllersEvent = this.events.get(RemoveControllersEvent);
      removeControllersEvent.add(_context, { ..._context.params });
    }
  }
}
