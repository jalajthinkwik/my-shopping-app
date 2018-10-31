import React from 'react';

import Layout from '../../hoc/Layout/Layout';

const product = (props) => (<Layout>
  <div className="container">
    <div className="card my-5">
      <div className="card-body">
        <div className="row ">
          <div className="col-4">
            <img className="img-fluid" src="https://via.placeholder.com/350x300" alt="Card image cap"/>
          </div>
          <div className="col-8">
            <h5 className="card-title">Polo t-shirt</h5>
            <h6 className="card-title">Price : $20</h6>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>)

export default product;
