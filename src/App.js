import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 class='' id='welcome-msg'>Welcome, User!</h1>
        <section id='logo'>
          <img src='' alt='The RT Logo'/>
          <h1 class=''>Rancid Tomatillos</h1>
          <h3 class=''>'Some clever quote!'</h3>
        </section>
        <form>
          <input placeholder='Find a Flick'/>
        </form>
      </header>
      <main>
        <h1 class='' id='main-title'>Movies</h1>
        <section id='movie-display'>
          /~movies mini-cards go here~/
        </section>
      </main>
    </div>
  );
}

export default App;
