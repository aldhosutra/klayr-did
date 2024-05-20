/* eslint-disable class-methods-use-this */

import { DidModuleConfig, RemoveKeysParam, utils } from '@klayr-did/klayr-decentralized-identifier';
import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'klayr-sdk';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { RemoveKeysEvent } from '../events/remove_keys_event';
import { executeRemoveKeysCommand } from '../logic/remove_keys';

export class RemoveKeysCommand extends BaseCommand {
  public schema = utils.schema.removeKeysCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<RemoveKeysParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<RemoveKeysParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeRemoveKeysCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const removeKeysEvent = this.events.get(RemoveKeysEvent);
      removeKeysEvent.add(_context, { ..._context.params });
    }
  }
}
