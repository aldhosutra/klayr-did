/* eslint-disable import/no-extraneous-dependencies */
import { VerifiablePresentation } from '@dist/types';
import { preprocessPresentation } from '@dist/util';
import { CREDENTIALS_CONTEXT_V1_URL as vcUrl } from 'credentials-context';
import { utils } from 'lisk-sdk';
import { presentation } from '../../setup/constant';

describe('preprocessPresentation', () => {
  it('should add @context automatically if not present', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation['@context'] = undefined;
    preprocessPresentation(copyPresentation);
    expect(copyPresentation['@context']).toContain(vcUrl);
  });

  it('should unshift @context automatically if not present', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation['@context'] = ['anything://other.than/required'];
    preprocessPresentation(copyPresentation);
    expect(copyPresentation['@context']).toContain(vcUrl);
    expect(copyPresentation['@context'][0]).toBe(vcUrl);
  });

  it('should change its type to string array if string is provided', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation['@context'] = 'anything://other.than/required';
    preprocessPresentation(copyPresentation);
    expect(copyPresentation['@context']).toStrictEqual([vcUrl]);
  });

  it('should order @context automatically if not ordered accordingly', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation['@context'] = ['anything://other.than/required', vcUrl];
    preprocessPresentation(copyPresentation);
    expect(copyPresentation['@context']).toContain(vcUrl);
    expect(copyPresentation['@context'][0]).toBe(vcUrl);
  });

  it('should add type automatically if not present', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation.type = undefined as any;
    preprocessPresentation(copyPresentation);
    expect(copyPresentation.type).toContain('VerifiablePresentation');
  });

  it('should order type automatically if not ordered accordingly', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation.type = ['OtherpresentationType', 'VerifiablePresentation'];
    preprocessPresentation(copyPresentation);
    expect(copyPresentation.type).toContain('VerifiablePresentation');
    expect(copyPresentation.type[0]).toBe('VerifiablePresentation');
  });

  it('should add id with sha256 urn', () => {
    const copyPresentation = utils.objects.cloneDeep(presentation) as VerifiablePresentation;
    copyPresentation.id = undefined as any;
    preprocessPresentation(copyPresentation);
    expect(copyPresentation.id).toBeDefined();
    expect(copyPresentation.id).toBe('urn:sha256:ac905f52bb3e5d89062db7045d65512e1742a26815901a294da9633a137bc2fd');
  });
});
