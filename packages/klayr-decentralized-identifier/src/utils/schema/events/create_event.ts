export const createEventSchema = {
  $id: '/did/events/create',
  type: 'object',
  required: ['did', 'keys', 'controllers'],
  properties: {
    did: {
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
    controllers: {
      fieldNumber: 3,
      type: 'array',
      items: {
        dataType: 'string',
      },
    },
  },
};
