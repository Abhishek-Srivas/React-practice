import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>HI I AM LEARNING REACT</h1>
      <Person name="Abhishek Srivas" age="19" />
      <Person name="AniTheSin" age="20">Is my gaming id</Person>
    </div>
  );
}

export default App;
