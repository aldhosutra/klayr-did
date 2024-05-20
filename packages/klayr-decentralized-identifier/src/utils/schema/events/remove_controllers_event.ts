export const removeControllersEventSchema = {
  $id: '/did/events/remove_controllers',
  type: 'object',
  required: ['target', 'controllers', 'signer', 'signature'],
  properties: {
    target: {
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
