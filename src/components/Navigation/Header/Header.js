import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';

class Header extends Component {

  render() {
    return (<Aux>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">My Shopping App</a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className={(this.props.match.path == '/') ? "nav-link text-primary" : "nav-link"} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={(this.props.match.path == '/about') ? "nav-link text-primary" : "nav-link"} to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Aux>)
  }
}

export default withRouter(Header);
