export const documentStoreSchema = {
  $id: '/did/store/document',
  type: 'object',
  required: [
    'context',
    'id',
    'controller',
    'verificationMethod',
    'authentication',
    'assertionMethod',
    'capabilityInvocation',
    'keyAgreement',
    'service',
  ],
  properties: {
    context: {
      type: 'array',
      fieldNumber: 1,
      items: {
        dataType: 'string',
      },
    },
    id: {
      dataType: 'string',
      fieldNumber: 2,
    },
    controller: {
      type: 'array',
      fieldNumber: 3,
      items: {
        dataType: 'string',
      },
    },
    verificationMethod: {
      type: 'array',
      fieldNumber: 4,
      items: {
        type: 'object',
        required: ['id', 'type', 'controller', 'publicKeyMultibase'],
        properties: {
          id: {
            dataType: 'string',
            fieldNumber: 1,
          },
          type: {
            dataType: 'string',
            fieldNumber: 2,
          },
          controller: {
            dataType: 'string',
            fieldNumber: 3,
          },
          publicKeyMultibase: {
            dataType: 'string',
            fieldNumber: 4,
          },
        },
      },
    },
    authentication: {
      type: 'array',
      fieldNumber: 5,
      items: {
        dataType: 'string',
      },
    },
    assertionMethod: {
      type: 'array',
      fieldNumber: 6,
      items: {
        dataType: 'string',
      },
    },
    capabilityInvocation: {
      type: 'array',
      fieldNumber: 7,
      items: {
        dataType: 'string',
      },
    },
    keyAgreement: {
      type: 'array',
      fieldNumber: 8,
      items: {
        type: 'object',
        required: ['id', 'type', 'controller', 'publicKeyMultibase'],
        properties: {
          id: {
            dataType: 'string',
            fieldNumber: 1,
          },
          type: {
            dataType: 'string',
            fieldNumber: 2,
          },
          controller: {
            dataType: 'string',
            fieldNumber: 3,
          },
          publicKeyMultibase: {
            dataType: 'string',
            fieldNumber: 4,
          },
        },
      },
    },
    service: {
      type: 'array',
      fieldNumber: 9,
      items: {
        type: 'object',
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
    },
  },
};
