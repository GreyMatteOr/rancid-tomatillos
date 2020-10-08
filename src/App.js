import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <Main movies={props.movies} />
    </div>
  );
}

export default App;
