import React, {Component} from 'react';

import Layout from '../../hoc/Layout/Layout';
import {GetRequest} from '../../services/ApiServices';

class Product extends Component {

  state = {
    product: {}
  }

  componentDidMount() {
    let product = {}
    GetRequest('products.json').then((response) => {
      response.data.map(item => {
        if(item.id == this.props.match.params.id) {
          product = item;
        }
      })
      this.setState({ product });
    }).catch((error) => {
      console.error(error);
    })
  }

  render() {

    let product = this.state.product;

    return (<Layout>
      <div className="container">
        <div className="card my-5">
          <div className="card-body">
            <div className="row ">
              <div className="col-4">
                <img className="img-fluid" src={product.image} alt="Card image cap"/>
              </div>
              <div className="col-8">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-title">Price : ${product.price}</h6>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  }
}

export default Product;
