import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abhishek Srivas", age: "19" },
      { name: "AniTheSin", age: "20" },
    ],
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: "19" },
        { name: "AniTheSin", age: "20" },
      ],
    });
  };

  changeNameHandler = (event) =>{
    this.setState({
      persons: [
        { name: event.target.value, age: "19" },
        { name: "AniTheSin", age: "20" },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>HI I AM LEARNING REACT</h1>
        <button onClick={this.switchNameHandler.bind(this, "ani")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,"Abhishek")}
          changed = {this.changeNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Is my gaming id
        </Person>
      </div>
    );
  }
}

export default App;
