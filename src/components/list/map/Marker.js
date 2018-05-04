import React from 'react';
import PropTypes from 'prop-types';

class Marker extends React.Component {

  render() {

    const { highlight } = this.props;

    const highlightClass =  highlight ? 'focus' : '';

    return(
      <div className={'map-marker'}>
        <img src={'http://simpleicon.com/wp-content/uploads/map-marker-13.png'} width={30} height={30} className={`normal ${highlightClass}`} alt={'marker'} />
        <img src={'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png'} width={30} height={30} className={`active ${highlightClass}`} alt={'marker'} />
      </div>
    )

  }

}

Marker.propTypes = {
  highlight: PropTypes.bool
};

export default Marker;