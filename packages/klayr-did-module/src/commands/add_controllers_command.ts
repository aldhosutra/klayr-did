/* eslint-disable class-methods-use-this */

import { AddControllersParam, DidModuleConfig, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'klayr-sdk';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { executeAddControllersCommand } from '../logic/add_controllers';
import { AddControllersEvent } from '../events/add_controllers_event';

export class AddControllersCommand extends BaseCommand {
  public schema = utils.schema.addControllersCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<AddControllersParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<AddControllersParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeAddControllersCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const addControllersEvent = this.events.get(AddControllersEvent);
      addControllersEvent.add(_context, { ..._context.params });
    }
  }
}
