import React from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import PropTypes from 'prop-types';

import { getRestaurantsForLocation } from '../actions/Entities';

import Restaurant from './list/Restaurant';
import Map from './list/Map';

class List extends React.Component {

  constructor() {
    super();

    this.state = {
      highlight: false
    };

    this.onHover = this.onHover.bind(this);
  }

  componentWillMount() {
    if( typeof window !== 'undefined' )
      this.props.dispatch( getRestaurantsForLocation(this.props.match.params) );
  }

  onHover(id) {

    this.setState({
      highlight: id
    });

  }

  render() {

    const { locationInfo } = this.props;
    const _loadingToRender = <p className={'loading'}>Loading...</p>
    let _locationMeta = _loadingToRender;
    let _restaurantList = _loadingToRender;
    let markerPoints = [];
    if( Object.keys(locationInfo).length ) {

      const { location, popularity, nearby_restaurants } = locationInfo;
      _locationMeta = (
        <div className={'LocationMeta-inner'}>
          <h1>
            { location.title }, <span>{ location.city_name }, { location.country_name }</span>
          </h1>
          <h3>

          </h3>
          <div className={'top-cuisines'}>
            <p>Top cuisines</p>
            <span>
              {
                popularity.top_cuisines.join(', ')
              }
            </span>
          </div>
        </div>
      );

      _restaurantList = nearby_restaurants.map( _restaurant => {

        const { restaurant } = _restaurant;

        const highlight = this.state.highlight === restaurant.id;

        markerPoints.push({
          id: restaurant.id,
          lat: Number( restaurant.location.latitude ),
          lng: Number( restaurant.location.longitude ),
          highlight
        });
        return <Restaurant highlight={highlight} key={restaurant.id} item={restaurant} hover={this.onHover}/>

      })

    }

    return(
      <div className={`row`}>
        <div className={`col-xs-12 ListPage page`}>
          <div className={`container-fluid`}>
            <div className={'row'}>
              <div className={`col-xs-12 ListPage-location`}>
                { _locationMeta }
              </div>
            </div>
            <div className={'row'}>
              <div className={'col-xs-12 col-md-6'}>
                <div className={'col-xs-12 ListPage-section restaurant'}>
                  <h3>Nearby restaurants</h3>
                  { _restaurantList }
                </div>
              </div>
              <div className={'col-xs-12 col-md-6'}>
                <div className={'col-xs-12 ListPage-section map'}>
                  <Map markerPoints={markerPoints} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

}

const mapStateToProps = (state) => {

  return {
    locationInfo: state.entities[state.activeEntity] || {}
  }

};

List.propTypes = {
  match: PropTypes.object,
  locationInfo: PropTypes.object,
  dispatch: PropTypes.func
};

export default withRouter(connect(mapStateToProps)(List));