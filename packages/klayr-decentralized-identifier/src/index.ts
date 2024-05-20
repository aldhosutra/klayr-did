import * as did from './did';
import * as client from './client';
import * as cryptography from './cryptography';
import * as resolver from './resolver';
import * as utils from './utils';

export * from './did';
export * as client from './client';
export * as cryptography from './cryptography';
export * as resolver from './resolver';
export * as utils from './utils';

export * from './types';

export default { ...did, client, cryptography, resolver, utils };
