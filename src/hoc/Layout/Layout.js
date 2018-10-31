import React, {Component} from 'react';

import Header from '../../components/Navigation/Header/Header';
import Aux from '../Aux/Aux';

class Layout extends Component {

  render() {
    let element;
    if (this.props.children) {
      element = this.props.children
    }

    return (<Aux>
      <div className="wrapper">
        <Header />
        {element}
      </div>
    </Aux>)
  }
}

export default Layout;
