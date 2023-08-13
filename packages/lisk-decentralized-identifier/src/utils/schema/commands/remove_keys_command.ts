export const removeKeysCommandSchema = {
  $id: '/did/command/remove_keys',
  type: 'object',
  required: ['target', 'publicKeys', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    publicKeys: {
      fieldNumber: 2,
      type: 'array',
      items: {
        dataType: 'bytes',
      },
    },
    signer: {
      dataType: 'string',
      fieldNumber: 3,
    },
    signature: {
      dataType: 'bytes',
      fieldNumber: 4,
    },
  },
};
