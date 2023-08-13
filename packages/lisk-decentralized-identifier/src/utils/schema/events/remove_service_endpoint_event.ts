export const removeServiceEndpointEventSchema = {
  $id: '/did/events/remove_service_endpoint',
  type: 'object',
  required: ['target', 'endpointIds', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    endpointIds: {
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
