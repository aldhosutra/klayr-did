import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'lisk-did',
    src: require('@site/static/img/lisk-did-sdk.png').default,
    description: <>Lisk DID/VC Development Kit, which bundles other Lisk DID packages into one single package.</>,
  },
  {
    title: '@lisk-did/lisk-did-module',
    src: require('@site/static/img/lisk-did-module.png').default,
    description: <>Lisk module which implements on-chain logic for Lisk decentralized identifiers (DIDs)</>,
  },
  {
    title: '@lisk-did/lisk-decentralized-identifier',
    src: require('@site/static/img/did.png').default,
    description: (
      <>A library to work with W3C Decentralized Identifier (DID) for Lisk sidechains with the Lisk DID module.</>
    ),
  },
  {
    title: '@lisk-did/lisk-verifiable-credentials',
    src: require('@site/static/img/vc.png').default,
    description: (
      <>A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Lisk DID.</>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
