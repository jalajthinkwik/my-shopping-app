import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layout/Layout';

class Products extends Component {

  render() {

    return (<Aux>
      <div className="container my-5">
        <div className="row products-list">
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Price : $140</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table class="table table-bordered text-center">
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$20</td>
              <td>3</td>
              <td>$60</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$20</td>
              <td>3</td>
              <td>$60</td>

            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$20</td>
              <td>3</td>
              <td>$60</td>

            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$20</td>
              <td>3</td>
              <td>$60</td>

            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$20</td>
              <td>3</td>
              <td>$60</td>

            </tr>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-weight-bold text-primary">$650</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Aux>)
  }
}

export default Products;
