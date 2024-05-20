/* eslint-disable class-methods-use-this */

import { DeactivateParam, DidModuleConfig, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'klayr-sdk';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { executeDeactivateCommand } from '../logic/deactivate_did';
import { DeactivateEvent } from '../events/deactivate_event';
import { verifyAuthorization } from '../logic/authorization';

export class DeactivateCommand extends BaseCommand {
  public schema = utils.schema.deactivateCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<DeactivateParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context, true);
  }

  public async execute(_context: CommandExecuteContext<DeactivateParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeDeactivateCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const deactivateEvent = this.events.get(DeactivateEvent);
      deactivateEvent.add(_context, { ..._context.params });
    }
  }
}
