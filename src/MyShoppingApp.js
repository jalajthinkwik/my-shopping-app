import React, { Component } from 'react';
import './MyShoppingApp.css';
import Layout from './hoc/Layout/Layout';

class MyShoppingApp extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default MyShoppingApp;
