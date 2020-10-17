import React from 'react';
import Home from './components/Home.js'
import Form1 from './components/Form1.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homePage: true,
      name: '',
      email: '',
      password: ''
    }
  }

  startCheckout = () => {
    this.setState({
      homePage: false,
      form: 'F1'
    })
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {homePage, name, email, password} = this.state;
    if (homePage) {
      return <Home startCheckout={this.startCheckout}/>
    } else {
      if (this.state.form === 'F1') {
        return <Form1 handleChange={this.handleChange} name={name} email={email} password={password}/>
      }
    }
  }
}


export default App;
