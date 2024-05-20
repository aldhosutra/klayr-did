export const addServiceEndpointCommandSchema = {
  $id: '/did/command/add_service_endpoint',
  type: 'object',
  required: ['target', 'endpoint', 'signer', 'signature'],
  properties: {
    target: {
      dataType: 'string',
      fieldNumber: 1,
    },
    endpoint: {
      type: 'object',
      fieldNumber: 2,
      required: ['id', 'type', 'serviceEndpoint'],
      properties: {
        id: {
          dataType: 'string',
          fieldNumber: 1,
        },
        type: {
          dataType: 'string',
          fieldNumber: 2,
        },
        serviceEndpoint: {
          dataType: 'string',
          fieldNumber: 3,
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
