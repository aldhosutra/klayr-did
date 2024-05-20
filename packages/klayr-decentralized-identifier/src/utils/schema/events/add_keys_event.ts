export const addKeysEventSchema = {
  $id: '/did/events/add_keys',
  type: 'object',
  required: ['target', 'keys', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    keys: {
      type: 'array',
      fieldNumber: 2,
      items: {
        type: 'object',
        required: ['publicKey', 'relationship'],
        properties: {
          publicKey: {
            dataType: 'bytes',
            fieldNumber: 1,
          },
          relationship: {
            type: 'array',
            fieldNumber: 2,
            items: {
              dataType: 'string',
            },
          },
        },
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
