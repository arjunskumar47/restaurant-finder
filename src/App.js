import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

import * as metadata from './metadata';

import ApiConnection from './utils/ApiConnection';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './components/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './components/About'),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

    const { ZomatoKey, apiBase } = this.props.config;
    ApiConnection.setConfig( ZomatoKey, apiBase );

  }

  render() {

    return(
      <div className="app container-fluid">
        <Helmet
          title={metadata.title}
          meta={metadata.meta}
          link={metadata.link}
          script={metadata.script}
          noscript={metadata.noscript}
        />

        <div className="main">
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/about" component={LoadableAbout} />
          </Switch>
        </div>

        <footer />
      </div>
    )

  }

}

const mapStateToProps = (state) => {

  return {
    config: state.app.config
  }

};

App.propTypes = {
  config: PropTypes.object
};

export default connect(mapStateToProps)(App);
