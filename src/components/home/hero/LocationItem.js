import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

export default class LocationItem extends React.Component {

  render() {

    const { item } = this.props;

    return(
      <Link to={`/list/${item.latitude}/${item.longitude}`} className={`col-xs-12 LocationItem`}>
        { item.title }
      </Link>
    )

  }

}

LocationItem.propTypes = {
  item: PropTypes.object
};