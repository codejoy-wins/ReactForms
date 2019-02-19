import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Table from './Table';
// handle submit

class App extends Component {
  state = {
    users: [{
      "name":"",
      "job":"",
    }],
  }
  handleSubmit = data =>{
    console.log("handling");
    this.setState({users:[...this.state.users,data]});
  }
//   handleSubmit = character => {
//     this.setState({characters: [...this.state.characters, character]});
// }
  render() {
    return (
      <div className="App">
        < Form handleSubmit={this.handleSubmit}/>
        <Table userData={this.state.users}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Codejoy
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
