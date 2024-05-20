export const createCommandSchema = {
  $id: '/did/command/create',
  type: 'object',
  required: ['did', 'controllers', 'keys'],
  properties: {
    did: {
      dataType: 'string',
      fieldNumber: 1,
    },
    controllers: {
      fieldNumber: 2,
      type: 'array',
      items: {
        dataType: 'string',
      },
    },
    keys: {
      type: 'array',
      fieldNumber: 3,
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
  },
};
