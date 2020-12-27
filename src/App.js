import React, { Component } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abhishek Srivas", age: "19" },
      { name: "AniTheSin", age: "20" },
    ],
    showPerson: false,
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: "19" },
        { name: "AniTheSin", age: "20" },
      ],
      
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "19" },
        { name: "AniTheSin", age: "20" },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };

  render() {
    const style = {
      backgroudColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPerson){
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Abhishek")}
              changed={this.changeNameHandler}
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
    return (
      <div className="App">
        <h1>HI I AM LEARNING REACT</h1>
        <button
          onClick={this.togglePersonHandler}
          style={style}
        >
          Show List
        </button>
        { persons}
      </div>
    );
  }
}

export default App;
