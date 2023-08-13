import * as didModule from '@lisk-did/lisk-did-module';
import * as did from '@lisk-did/lisk-decentralized-identifier';
import * as vc from '@lisk-did/lisk-verifiable-credentials';

export * from '@lisk-did/lisk-did-module';
export * as did from '@lisk-did/lisk-decentralized-identifier';
export * as vc from '@lisk-did/lisk-verifiable-credentials';

export default { ...didModule, did, vc };
