import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Products from './containers/Products/Products';
import About from './components/About/About';
import Product from './components/Product/Product';

class MyShoppingAppRoutes extends Component {

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product/:id" component={Product} />
        </div>
      </BrowserRouter>
    </div>)
  }
}

export default MyShoppingAppRoutes
