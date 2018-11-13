import React, {Component} from 'react';

import Layout from '../../hoc/Layout/Layout';
import {GetRequest} from '../../services/ApiServices';

class Products extends Component {

  selected = [];
  total = 0;

  state = {
    products: [],
    selectedProduct: [],
    totalPrice: 0
  }

  componentDidMount() {
    GetRequest('products.json').then((response) => {
      this.setState({products: response.data});
    }).catch((error) => {
      console.error(error);
    })
  }

  goToProductListingHandler = (id) => this.props.history.push({pathname: `product/${id}`});

  addProductToSelectionHandler = (item, i, flag) => {

    if (flag == 'remove') {
      item.added = false;
      let index = this.selected.findIndex(k => k.id === item.id);
      this.selected.splice(index, 1);
      this.total = this.total - parseInt(item.price);
    } else {
      item.added = true;
      this.selected.push(item);
      this.total = this.total + parseInt(item.price);
    }
    this.setState({selectedProduct: this.selected, totalPrice: this.total});
  }

  render() {

    let product;
    let selectedProduct;

    if (this.state.products.length) {
      product = this.state.products.map((item, i) => {
        return (<div className="col-4" key={item.id}>
          <div className="card">
            <img className="card-img-top" src={item.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title product-name" onClick={() => this.goToProductListingHandler(item.id)}>{item.name}</h5>
              <p className="card-text">Price : ${item.price}</p>
              {
                !item.added
                  ? <a className="btn btn-primary text-white" onClick={() => this.addProductToSelectionHandler(item, i, '')}>Add</a>
                  : null
              }
              {
                item.added
                  ? <a className="btn btn-danger text-white" onClick={() => this.addProductToSelectionHandler(item, i, 'remove')}>Remove</a>
                  : null
              }
            </div>
          </div>
        </div>)
      })
    }

    if (this.state.selectedProduct.length) {
      selectedProduct = this.state.selectedProduct.map((item, i) => {
        return (<tr key={item.id}>
          <th scope="row">{i+1}</th>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>1</td>
          <td>${item.price}</td>
        </tr>)
      })
    }

    return (<Layout>
      <div className="container my-5">
        <div className="row products-list">
          {product}
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">quantity</th>
              <th className="text-primary" scope="col">Total</th>
            </tr>
          </thead>
          {
            this.state.selectedProduct.length === 0
              ? <tbody>
                  <tr>
                    <td colSpan="5" className="font-weight-bold">No Item Selected</td>
                  </tr>
                </tbody>
              : null
          }
          {
            this.state.selectedProduct.length
              ? <tbody>
                  {selectedProduct}
                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold text-primary">{`$${this.state.totalPrice}`}</td>
                  </tr>
                </tbody>
              : null
          }
        </table>
      </div>
    </Layout>)
  }
}

export default Products;
