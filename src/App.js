import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:'1234',name: "Abhishek Srivas", age: "19" },
      { id:'12345',name: "AniTheSin", age: "20" },
    ],
    showPerson: false,
  };

  

  changeNameHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color:'white',
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
              key = {person.id}
              change = {(event) => this.changeNameHandler(event,person.id)}
            />
          })}     
        </div>
      );
      style.backgroundColor = 'red';
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
