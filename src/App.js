import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    this.getData();
  }
  
  // getData(){
  //   fetch("/api/data",{
  //     type:"GET"
  //   }).then(res=>{
  //     return res.json()
  //   }).then(function(response) {
  //     console.log(response)
  //   }).catch(err=>console.log(err));
  // }
  getData(){
    Axios.get("/api/data").then(res=>{
      console.log(res.data)
    }).catch(err=>console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
