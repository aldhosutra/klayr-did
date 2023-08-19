/* eslint-disable class-methods-use-this */

import { BaseCommand, type CommandVerifyContext, type CommandExecuteContext, type VerificationResult } from 'lisk-sdk';
import { AddKeysParam, DidModuleConfig, utils } from '@lisk-did/lisk-decentralized-identifier';
import { verifyAuthorization } from '../logic/authorization';
import { DocumentStore } from '../stores/document';
import { NonceStore } from '../stores/nonce';
import { AddKeysEvent } from '../events/add_keys_event';
import { executeAddKeysCommand } from '../logic/add_keys';

export class AddKeysCommand extends BaseCommand {
  public schema = utils.schema.addKeysCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<AddKeysParam>): Promise<VerificationResult> {
    return await verifyAuthorization.bind(this)(_context);
  }

  public async execute(_context: CommandExecuteContext<AddKeysParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);

    if (await executeAddKeysCommand(_context, documentSubstore, nonceSubstore, _context.params)) {
      const addKeysEvent = this.events.get(AddKeysEvent);
      addKeysEvent.add(_context, { ..._context.params });
    }
  }
}
