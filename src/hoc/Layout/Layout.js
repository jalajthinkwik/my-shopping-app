import React, {Component} from 'react';

import Header from '../../components/Navigation/Header/Header';
import Products from '../../containers/Products/Products';
import Aux from '../Aux/Aux';

class Layout extends Component {

  render() {
    let element;
    console.log(this.props);
    if (this.props.children) {
      element = this.props.children
    }

    return (<Aux>
      <div className="wrapper">
        <Header />
        <Products />
      </div>
    </Aux>)
  }
}

export default Layout;
