import didModule from '@klayr-did/klayr-did-module';
import did from '@klayr-did/klayr-decentralized-identifier';
import vc from '@klayr-did/klayr-verifiable-credentials';

export * from '@klayr-did/klayr-did-module';
export * as did from '@klayr-did/klayr-decentralized-identifier';
export * as vc from '@klayr-did/klayr-verifiable-credentials';

export default { ...didModule, did, vc };
