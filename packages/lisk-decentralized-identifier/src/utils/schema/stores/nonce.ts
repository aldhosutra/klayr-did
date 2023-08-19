export const nonceStoreSchema = {
  $id: '/did/store/nonce',
  type: 'object',
  required: ['nonce'],
  properties: {
    nonce: {
      dataType: 'uint64',
      fieldNumber: 1,
    },
  },
};
