import React, { Component } from 'react';
import logo from './logo.svg';
import './ReactStarter.css';
import Layout from './hoc/Layout/Layout';

class ReactStarter extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default ReactStarter;
