import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Hero from './home/Hero';

export class Home extends React.Component {

  render() {
    return (
      <div className={`home`}>
        <Hero />
      </div>
    );
  }

}

export default withRouter(connect()(Home));
