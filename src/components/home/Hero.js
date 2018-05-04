import React from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';

import Clearfix from './../utilities/Clearfix';
import LocationItem from './hero/LocationItem';

import { searchLocation, findLocationUsingBrowserAPI } from '../../actions/Entities';
import { toggleLoading } from './../../actions/Loading';

class Hero extends React.Component {

  constructor() {
    super();

    this.state = {
      searchText: '',
      searching: false,
      locations: [],
      redirect: false
    };

    this.searchLocality = this.searchLocality.bind(this);
    this.throttleSearch = throttle( this.throttleSearch.bind(this), 400 );
    this.detectLocation = this.detectLocation.bind(this);
  }

  searchLocality(e) {

    const searchText = e.currentTarget.value;
    this.throttleSearch( searchText );
    this.setState({
      searchText
    });

  }

  throttleSearch( text ) {

    if( !text.trim().length )
      return;

    this.setState({
      searching: true
    });
    searchLocation(text, (err, results) => {

      this.setState({
        locations: results || [],
        searching: false
      });

    });

  }

  detectLocation(e) {
    e.preventDefault();

    this.props.dispatch(toggleLoading());
    findLocationUsingBrowserAPI((err, position) => {

      this.props.dispatch(toggleLoading());
      if( err )
        return alert(err);

      this.setState({
        redirect: `/list/${position.coords.latitude}/${position.coords.longitude}`
      });

    });
  }

  render() {

    const { searchText, locations, searching, redirect } = this.state;

    if( redirect )
      return <Redirect to={redirect} />;

    let locationListToRender = null;
    if( searchText.trim().length ) {

      let listContent = null;
      if( searching ) {

        listContent = (
          <p className={'empty-state'}>
            Searching...
          </p>
        )

      } else {

        if( locations.length ) {

          listContent = locations.map( item => {

            return (
              <LocationItem key={item.entity_id} item={item} />
            )

          });

        } else {

          listContent = <p className={'empty-state'}>
            No results! :(
          </p>
        }

      }

      locationListToRender = <div className={`col-xs-12 hero-inner-input-list`}>
        { listContent }
      </div>

    }

    return(
      <div className={`row`}>
        <div className={`col-xs-12 hero page`}>
          <div className={`container hero-inner`}>
            <h1>
              Find the best restaurants, cafés, and bars <span>near you!</span>
            </h1>
            <Clearfix />
            <div className={`hero-inner-input form-group col-xs-12 col-sm-10 col-md-6 no-pad`}>
              <input
                type='text'
                id={'locationSearch'}
                placeholder={`Enter locality`}
                onChange={this.searchLocality}
                value={searchText}
                className={'form-control hero-inner-input-field'} />
              <p className={`text-center hero-inner-input-location`}>
                or <button onClick={this.detectLocation}> click here to detect location automatically!</button>
              </p>
              { locationListToRender }
            </div>
          </div>
        </div>
      </div>
    )

  }

}

Hero.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Hero);