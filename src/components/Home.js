import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Jumbotron>
        <h1>Checkout</h1>
        <p>Are you ready to complete your order?</p>
        <p><Button variant="primary" onClick={this.props.startCheckout}>Checkout</Button></p>
      </Jumbotron>
    )
  }
}

export default Home;