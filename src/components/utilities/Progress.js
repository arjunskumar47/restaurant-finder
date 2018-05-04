import React from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';

class Progress extends React.Component {

  constructor() {
    super();

    // Not on SSR
    if ( typeof window !== 'undefined' ) {
      NProgress.configure({
        showSpinner: false,
        minimum: 0.3
      });
    }
  }

  render() {

    const { loading } = this.props;

    if( loading ) {
      NProgress.start();
    } else {
      NProgress.done();
    }

    return null;

  }

}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
};

Progress.propTypes = {
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(Progress);