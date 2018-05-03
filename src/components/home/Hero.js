import React from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

import Clearfix from './../utilities/Clearfix';

import { searchLocation } from './../../actions/Location';

class Hero extends React.Component {

  constructor() {
    super();

    this.searchLocality = this.searchLocality.bind(this);
    this.throttleSearch = throttle( this.throttleSearch.bind(this), 400 );
  }

  searchLocality(e) {

    const text = e.currentTarget.value;
    this.throttleSearch( text );

  }

  throttleSearch( text ) {

    console.log( text );
    this.props.dispatch(searchLocation(text));

  }

  render() {

    return(
      <div className={`row`}>
        <div className={`col-xs-12 hero`}>
          <div className={`container hero-inner`}>
            <h1>
              Find the best restaurants, cafés, and bars <span>near you!</span>
            </h1>
            <Clearfix />
            <div className={`hero-inner-input form-group col-xs-12 col-sm-10 col-md-6`}>
              <input
                type='text'
                id={'locationSearch'}
                placeholder={`Enter locality`}
                onChange={this.searchLocality}
                className={'form-control hero-inner-input-field'} />
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