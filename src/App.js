import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';

import * as metadata from './metadata';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './components/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableList = Loadable({
  loader: () => import(/* webpackChunkName: 'list' */ './components/List'),
  loading() {
    return <div>Loading...</div>;
  }
});

import Navbar from './components/utilities/Navbar';
import Progress from './components/utilities/Progress';

const App = () => {
  return (
    <div className="app container-fluid">
      <Helmet
        title={metadata.title}
        meta={metadata.meta}
        link={metadata.link}
        script={metadata.script}
        noscript={metadata.noscript}
      />

      <Navbar />

      <div className="main">
        <Switch>
          <Route exact path="/" component={LoadableHome} />
          <Route exact path="/list/:latitude/:longitude" component={LoadableList} />
        </Switch>
      </div>

      <div className={'row'}>
        <footer className={`text-center`}>
          <div className={`container-fluid`}>
            <p>
              &copy; { new Date().getFullYear() } - Restaurant Finder
            </p>
          </div>
        </footer>
      </div>
      <Progress />
    </div>
  )
}

export default App;
