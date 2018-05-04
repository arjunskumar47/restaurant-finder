import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

import Marker from './map/Marker';

// Koramangala
const DEFAULT_CENTER = {
  lat: 12.937254,
  lng: 77.626938
};

class Map extends React.Component {

  render() {

    const { center, zoom, apiKey, markerPoints } = this.props;

    const markers = markerPoints.map( _marker => {

      return <Marker key={_marker.id} {..._marker} />

    });

    let toRender = typeof window === 'undefined'
      ? null
      : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          { markers }
        </GoogleMapReact>
      );

    return (
      <div className={`row`}>
        <div className={'col-xs-12 map-wrapper no-pad'}>
          { toRender }
        </div>
      </div>
    )

  }

}

const mapStateToProps = (state) => {

  const center = Object.keys(state.location).length
    ? {
      lat: Number( state.location.latitude ),
      lng: Number( state.location.longitude )
    }
    : DEFAULT_CENTER;

  return {
    center,
    zoom: 15,
    apiKey: state.app.config.GoogleMapsKey
  }

};

Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  apiKey: PropTypes.string,
  markerPoints: PropTypes.array
};

export default connect(mapStateToProps)(Map);