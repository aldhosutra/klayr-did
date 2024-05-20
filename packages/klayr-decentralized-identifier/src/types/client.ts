import {
  type AddControllersParam,
  type AddKeysParam,
  type AddServiceEndpointParam,
  type CreateParam,
  type DeactivateParam,
  type RemoveControllersParam,
  type RemoveKeysParam,
  type RemoveServiceEndpointParam,
} from '.';
import { Schema, TransactionJSON } from 'klayr-sdk';

type SignatureMessage<T> = Omit<T, 'signature'> & { nonce?: bigint; signature?: Buffer };

interface SignaturePayload<K extends DIDCommands, T> {
  command: K;
  params: SignatureMessage<T>;
}

type AddControllersSignaturePayload = SignaturePayload<'addControllers', AddControllersParam>;
type AddKeysSignaturePayload = SignaturePayload<'addKeys', AddKeysParam>;
type AddServiceEndpointSignaturePayload = SignaturePayload<'addServiceEndpoint', AddServiceEndpointParam>;
type CreatePayload = SignaturePayload<'create', CreateParam>;
type DeactivateSignaturePayload = SignaturePayload<'deactivate', DeactivateParam>;
type RemoveControllersSignaturePayload = SignaturePayload<'removeControllers', RemoveControllersParam>;
type RemoveKeysSignaturePayload = SignaturePayload<'removeKeys', RemoveKeysParam>;
type RemoveServiceEndpointSignaturePayload = SignaturePayload<'removeServiceEndpoint', RemoveServiceEndpointParam>;

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type DIDTransactionParam =
  | AddControllersParam
  | AddKeysParam
  | AddServiceEndpointParam
  | CreateParam
  | DeactivateParam
  | RemoveControllersParam
  | RemoveKeysParam
  | RemoveServiceEndpointParam;

export type WriteableSchema = Writeable<Schema>;

export type DIDCommands =
  | 'addControllers'
  | 'addKeys'
  | 'addServiceEndpoint'
  | 'create'
  | 'deactivate'
  | 'removeControllers'
  | 'removeKeys'
  | 'removeServiceEndpoint';

export type PayloadWithSignature =
  | AddControllersSignaturePayload
  | AddKeysSignaturePayload
  | AddServiceEndpointSignaturePayload
  | DeactivateSignaturePayload
  | RemoveControllersSignaturePayload
  | RemoveKeysSignaturePayload
  | RemoveServiceEndpointSignaturePayload;

export type CommandPayload = CreatePayload | PayloadWithSignature;

export interface TransactionPayload<T> {
  fee?: bigint;
  nonce?: bigint;
  params: SignatureMessage<T>;
}

export interface TransactionPayloadWithoutSignature<T> {
  fee?: bigint;
  nonce?: bigint;
  params: T;
}

export type DecodedTransactionJSON<T = Record<string, unknown>> = Omit<TransactionJSON, 'params'> & {
  params: T;
};
