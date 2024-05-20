export const jweDocumentSchema = {
  $id: '/did/jwe',
  type: 'object',
  required: ['protected', 'recipients', 'iv', 'ciphertext', 'tag'],
  properties: {
    protected: {
      dataType: 'string',
      fieldNumber: 1,
    },
    recipients: {
      type: 'array',
      fieldNumber: 2,
      items: {
        type: 'object',
        required: ['header', 'encrypted_key'],
        properties: {
          header: {
            type: 'object',
            fieldNumber: 1,
            required: ['kid', 'alg', 'epk', 'apu', 'apv'],
            properties: {
              kid: {
                dataType: 'string',
                fieldNumber: 1,
              },
              alg: {
                dataType: 'string',
                fieldNumber: 2,
              },
              epk: {
                type: 'object',
                fieldNumber: 3,
                required: ['kty', 'crv', 'x'],
                properties: {
                  kty: {
                    dataType: 'string',
                    fieldNumber: 1,
                  },
                  crv: {
                    dataType: 'string',
                    fieldNumber: 2,
                  },
                  x: {
                    dataType: 'string',
                    fieldNumber: 3,
                  },
                },
              },
              apu: {
                dataType: 'string',
                fieldNumber: 4,
              },
              apv: {
                dataType: 'string',
                fieldNumber: 5,
              },
            },
          },
          encrypted_key: {
            dataType: 'string',
            fieldNumber: 2,
          },
        },
      },
    },
    iv: {
      dataType: 'string',
      fieldNumber: 3,
    },
    ciphertext: {
      dataType: 'string',
      fieldNumber: 4,
    },
    tag: {
      dataType: 'string',
      fieldNumber: 5,
    },
  },
};
