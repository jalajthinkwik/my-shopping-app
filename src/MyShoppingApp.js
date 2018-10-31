import React, { Component } from 'react';
import './MyShoppingApp.css';
import MyShoppingAppRoutes from './MyShoppingAppRoutes';

class MyShoppingApp extends Component {
  render() {
    return (
      <div className="App">
        <MyShoppingAppRoutes />
      </div>
    );
  }
}

export default MyShoppingApp;
