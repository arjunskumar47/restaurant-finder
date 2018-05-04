import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Hero from './home/Hero';
import Features from './home/Features';

class Home extends React.Component {

  render() {
    return (
      <div className={`home`}>
        <Hero />
        <Features />
      </div>
    );
  }

}

export default withRouter(connect()(Home));
