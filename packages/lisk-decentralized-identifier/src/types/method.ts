import { MethodContext } from 'lisk-sdk';
import { DidModuleConfig } from './config';
import { DidDocument } from './did';
import { NonceStoreData } from './stores';
import { AuthorizationResult } from './cryptography';

type Keys = { publicKey: Buffer; relationship: string[] };

export interface DidMethod {
  init(config: DidModuleConfig): void;
  getConfig(): DidModuleConfig;
  read(methodContext: MethodContext, did: string): Promise<DidDocument>;
  getNonce(methodContext: MethodContext, did: string): Promise<NonceStoreData>;
  authorize(methodContext: MethodContext, did: string, publicKey: Buffer): Promise<AuthorizationResult[]>;
  create(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    did: string,
    controllers: string[],
    keys: Keys[],
  ): Promise<void>;
  addKeys(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    keys: Keys[],
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  removeKeys(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    publicKeys: Buffer[],
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  addControllers(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    controllers: string[],
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  removeControllers(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    controllers: string[],
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  addServiceEndpoint(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    endpoint: {
      id: string;
      type: string;
      serviceEndpoint: string;
    },
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  removeServiceEndpoint(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    endpointId: string,
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
  deactivate(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    signer: string,
    signature?: Buffer,
  ): Promise<void>;
}
