export const deactivateEventSchema = {
  $id: '/did/events/deactivate',
  type: 'object',
  required: ['target', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    signer: {
      dataType: 'string',
      fieldNumber: 2,
    },
    signature: {
      dataType: 'bytes',
      fieldNumber: 3,
    },
  },
};
