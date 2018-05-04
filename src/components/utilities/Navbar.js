import React from 'react';
import { connect } from 'react-redux';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router-dom/withRouter';

class Navbar extends React.Component {

  render() {

    return(
      <nav className={`navbar navbar-fixed-top Navbar`}>
        <div className={`container`}>
          <NavLink exact to={'/'} activeClassName="active">
            Home
          </NavLink>
        </div>
      </nav>
    )

  }

}

export default withRouter( connect()(Navbar) );