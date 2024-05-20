import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'klayr-did',
    src: require('@site/static/img/klayr-did-sdk.png').default,
    description: <>Klayr DID/VC Development Kit, which bundles other Klayr DID packages into one single package.</>,
  },
  {
    title: '@klayr-did/klayr-did-module',
    src: require('@site/static/img/klayr-did-module.png').default,
    description: <>Klayr module which implements on-chain logic for Klayr decentralized identifiers (DIDs)</>,
  },
  {
    title: '@klayr-did/klayr-decentralized-identifier',
    src: require('@site/static/img/did.png').default,
    description: (
      <>A library to work with W3C Decentralized Identifier (DID) for Klayr sidechains with the Klayr DID module.</>
    ),
  },
  {
    title: '@klayr-did/klayr-verifiable-credentials',
    src: require('@site/static/img/vc.png').default,
    description: (
      <>A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Klayr DID.</>
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
