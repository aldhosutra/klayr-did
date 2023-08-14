import didModule from '@lisk-did/lisk-did-module';
import did from '@lisk-did/lisk-decentralized-identifier';
import vc from '@lisk-did/lisk-verifiable-credentials';

export * from '@lisk-did/lisk-did-module';
export * as did from '@lisk-did/lisk-decentralized-identifier';
export * as vc from '@lisk-did/lisk-verifiable-credentials';

export default { ...didModule, did, vc };
