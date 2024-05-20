import { utils, Schema } from 'klayr-sdk';
import { DIDCommands, PayloadWithSignature, WriteableSchema } from '../../types';
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
  const requiredIndex = removedSignatureSchema.required!.findIndex(t => t === 'signature');
  if (requiredIndex !== undefined && requiredIndex > -1) {
    removedSignatureSchema.required!.splice(requiredIndex, 1);
  }
  removedSignatureSchema.required!.push('nonce');

  const { signature, ...rest } = removedSignatureSchema.properties;
  removedSignatureSchema.properties = rest;

  if (signature !== undefined) {
    removedSignatureSchema.properties.nonce = {
      dataType: 'uint64',
      fieldNumber: Object.keys(removedSignatureSchema.properties).length + 1,
    };
  }

  return removedSignatureSchema;
}

export function signatureSchemaBuilder(payload: PayloadWithSignature): Schema {
  if ((payload.command as any) === 'create')
    throw new Error("signatureSchemaBuilder can't be created for 'create' command");
  return removeSignatureAndAddNonce(schemaMaps[payload.command]);
}

export function signatureMessageBuilder(message: { params: { nonce?: bigint; signature?: Buffer } }) {
  if (message.params.nonce === undefined) throw new Error('nonce is required to build signature message');
  const { signature, ...payload } = message.params;
  return payload;
}
