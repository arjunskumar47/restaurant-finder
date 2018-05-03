import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    );
  }

}

export default withRouter(connect()(Home));
