import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/tz-07.svg').default,
    description: (
      <>
        Mtaa is designed from the ground up to be easily installed and
        allow you to easily access any location in Tanzania from region to streets.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_working_remotely_jh40.svg').default,
    description: (
      <>
        Mtaa lets you focus on your logic, mtaa provides in built methods and fuctionality
        to allow quickly and easily access all locations without managing it.
      </>
    ),
  },
  {
    title: 'Powered by Python',
    Svg: require('../../static/img/python-seeklogo.com.svg').default,
    description: (
      <>
        Mtaa was originally implemented in Python but its logic can be transferred
        into other programming languages.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
