export const removeServiceEndpointEventSchema = {
  $id: '/did/events/remove_service_endpoint',
  type: 'object',
  required: ['target', 'endpointId', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    endpointId: {
      dataType: 'string',
      fieldNumber: 2,
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
