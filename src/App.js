import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abhishek Srivas", age: "19" },
      { name: "AniTheSin", age: "20" },
    ],
    showPerson: false,
  };

  

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "19" },
        { name: "AniTheSin", age: "20" },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

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
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name = {person.name}
              age = {person.age}
            />
          })}     
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
