import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layout/Layout';
import { GetRequest } from '../../services/ApiServices';

class Products extends Component {

  selected = []

  state = {
    products: [],
    selectedProduct: []
  }

  componentDidMount() {
    GetRequest('products.json').then((response) => {
      this.setState({products: response.data});
    }).catch((error) => {
      console.error(error);
    })
  }

  goToProductListingHandler = () => {
    this.props.history.push({pathname: "product/1"});
  }

  addProductToSelectionHandler = (item, i) => {
    let quantity = 1;
    this.state.selectedProduct.map((product, index) => {
      if(product.id == item.id) {
        item.quantity = quantity++;
        console.log(item.quantity);
      }
    })

    this.selected.push(item);
    // console.log(item);
    // console.log(i);
    this.setState({selectedProduct: this.selected});
  }

  render() {

    let product;
    let selectedProduct;

    if(this.state.products.length) {
      product = this.state.products.map((item, i) => {
        return(
          <div className="col-4" key={item.id}>
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title" onClick={this.goToProductListingHandler}>{item.name}</h5>
                <p className="card-text">Price : ${item.price}</p>
                <a className="btn btn-primary" onClick={() => this.addProductToSelectionHandler(item, i)}>Add</a>
              </div>
            </div>
          </div>
        )
      })
    }

    if(this.state.selectedProduct.length) {
      selectedProduct = this.state.selectedProduct.map((item, i) => {
        return(
          <tr key={item.id}>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>1</td>
            <td>$20</td>
          </tr>
        )
      })
    }

    return (<Aux>
      <Layout>
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
          <tbody>
            {selectedProduct}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-weight-bold text-primary">$100</td>
            </tr>
          </tbody>
        </table>
      </div></Layout>
    </Aux>)
  }
}

export default Products;
