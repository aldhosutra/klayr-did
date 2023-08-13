/* eslint-disable class-methods-use-this */

import { CreateParam, DidModuleConfig, parseDIDComponent, utils } from '@lisk-did/lisk-decentralized-identifier';
import {
  BaseCommand,
  type CommandVerifyContext,
  type CommandExecuteContext,
  type VerificationResult,
  VerifyStatus,
} from 'lisk-sdk';
import { DocumentStore } from '../stores/document';
import { CreateEvent } from '../events/create_event';
import { executeCreateCommand } from '../logic/create_did';

export class CreateCommand extends BaseCommand {
  public schema = utils.schema.createCommandSchema;
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(_moduleConfig: DidModuleConfig): Promise<void> {
    this.config.chainspace = _moduleConfig.chainspace;
    this.config.autoCreateAddressDID = _moduleConfig.autoCreateAddressDID;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(_context: CommandVerifyContext<CreateParam>): Promise<VerificationResult> {
    try {
      const didComponent = parseDIDComponent(_context.params.did);
      if (this.config.chainspace !== didComponent.chainspace) {
        return {
          status: VerifyStatus.FAIL,
          error: new Error(
            `this chainspace ${this.config.chainspace} can't create did document for namespace "${didComponent.chainspace}"`,
          ),
        };
      }
    } catch (err: any) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error(err),
      };
    }
    if (_context.params.controllers.length === 0) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error(`at least one controller needed`),
      };
    }
    return { status: VerifyStatus.OK };
  }

  public async execute(_context: CommandExecuteContext<CreateParam>): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const { senderPublicKey } = _context.transaction;

    if (await executeCreateCommand(_context, this.config, senderPublicKey, documentSubstore, _context.params)) {
      const createEvent = this.events.get(CreateEvent);
      createEvent.add(_context, { ..._context.params });
    }
  }
}
