import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';

class Header extends Component {

  render() {

    return (<Aux>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My Shopping App</a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link">Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Aux>)
  }
}

export default Header;
