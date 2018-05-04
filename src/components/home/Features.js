import React from 'react';

const FEATURES_DATA = [
  {
    key: 'countries',
    main: 24
  },
  {
    key: 'restaurants',
    main: '1.2M'
  },
  {
    key: 'photos',
    main: '30M'
  },
  {
    key: 'reviews',
    main: '10M'
  }
];

export default class Features extends React.Component {

  render() {

    const _featuresToRender = FEATURES_DATA.map( feature => {

      return (
        <div key={feature.key} className={`col-xs-6 col-md-3 Features-inner-item text-center`}>
          <p className={'Features-inner-item-main'}>
            { feature.main }
          </p>
          <p className={'Features-inner-item-meta'}>
            { feature.key }
          </p>
        </div>
      )

    });

    return(
      <div className={`row`}>
        <div className={`col-xs-12 Features`}>
          <div className={`container Features-inner`}>
            { _featuresToRender }
          </div>
        </div>
      </div>
    )

  }

}