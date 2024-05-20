import * as index from '@dist/index';

test('should export as specified', () => {
  expect(index).toHaveProperty('DidModule');
  expect(index).toHaveProperty('DidMethod');
  expect(index).toHaveProperty('DidEndpoint');
  expect(index).toHaveProperty('AddControllersCommand');
  expect(index).toHaveProperty('AddKeysCommand');
  expect(index).toHaveProperty('AddServiceEndpointCommand');
  expect(index).toHaveProperty('CreateCommand');
  expect(index).toHaveProperty('DeactivateCommand');
  expect(index).toHaveProperty('RemoveControllersCommand');
  expect(index).toHaveProperty('RemoveKeysCommand');
  expect(index).toHaveProperty('RemoveServiceEndpointCommand');
});
