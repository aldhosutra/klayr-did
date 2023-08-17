import { PayloadWithSignature } from '@lisk-did/lisk-decentralized-identifier';
import { BaseCommand, CommandVerifyContext } from 'lisk-sdk';
import { DocumentStore } from '../../stores/document';
import { NonceStore } from '../../stores/nonce';
import { verifyOperation } from './verify_operation';

export async function verifyAuthorization(
  this: BaseCommand,
  context: CommandVerifyContext<any>,
  withLastController = false,
) {
  const documentSubstore = this.stores.get(DocumentStore);
  const nonceSubstore = this.stores.get(NonceStore);
  const payload: PayloadWithSignature = { command: this.name as any, params: context.params };

  return await verifyOperation(
    context,
    documentSubstore,
    nonceSubstore,
    (this as any).config,
    payload,
    context.transaction.senderPublicKey,
    withLastController,
  );
}
