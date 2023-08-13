import { utils, Schema } from 'lisk-sdk';
import { DIDCommands, WriteableSchema } from './types';
import { schema } from '../../utils';

const schemaMaps: Record<DIDCommands, Omit<Schema, '$schema'>> = {
  addControllers: schema.addControllersCommandSchema,
  addKeys: schema.addKeysCommandSchema,
  addServiceEndpoint: schema.addServiceEndpointCommandSchema,
  create: schema.createCommandSchema,
  deactivate: schema.deactivateCommandSchema,
  removeControllers: schema.removeControllersCommandSchema,
  removeKeys: schema.removeKeysCommandSchema,
  removeServiceEndpoint: schema.removeServiceEndpointCommandSchema,
};

function removeSignatureAndAddNonce(schema: Omit<Schema, '$schema'>) {
  const removedSignatureSchema: WriteableSchema = utils.objects.cloneDeep(schema);

  removedSignatureSchema.$id += '/no_signature';
  const requiredIndex = removedSignatureSchema.required?.findIndex(t => t === 'signature');
  if (requiredIndex !== undefined && requiredIndex > -1) {
    removedSignatureSchema.required?.splice(requiredIndex, 1);
  }
  removedSignatureSchema.required?.push('nonce');

  const { signature, ...rest } = removedSignatureSchema.properties;
  removedSignatureSchema.properties = rest;

  if (signature !== undefined) {
    removedSignatureSchema.properties.nonce = {
      signature: {
        dataType: 'uint64',
        fieldNumber: Object.keys(removedSignatureSchema.properties).length + 1,
      },
    };
  }

  return removedSignatureSchema;
}

export function signatureSchemaBuilder(command: DIDCommands): Schema {
  return removeSignatureAndAddNonce(schemaMaps[command]);
}

export function signatureMessageBuilder(message: Record<string, unknown | unknown[]>) {
  if (message.nonce === undefined) throw new Error('nonce is required to build signature');
  const { signature, ...payload } = message;
  return payload;
}
