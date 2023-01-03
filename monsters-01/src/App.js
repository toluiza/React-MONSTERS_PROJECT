import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: {firstName: 'Luiza', lastName: 'Jurczyk'},
      age: '34'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi {this.state.name.firstName} {this.state.name.lastName}</h1>
          <p>I and {this.state.age} years old.</p>
          <button onClick={() => {
            this.setState({name: {firstName: "Iza", lastName: "Tadam"}})
          }}>Change name</button>
        </header>
      </div>
    );
  };
}

export default App;
