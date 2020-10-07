import React from 'react';
import rtIcon from './tomatillo-icon.png';
import './App.css';
import MovieCard from './MovieCard.js';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header>
        <section>
          <h1 className='' id='welcome-msg'>Welcome, User!</h1>
          <button>Log out, ya dingus</button>
        </section>
        <section id='logo'>
          <img src={rtIcon} alt='The RT Logo'/>
          <h1 className=''>Rancid Tomatillos</h1>
          <h3 className=''>'Some clever quote!'</h3>
        </section>
        <form>
          <input placeholder='Find a Flick'/>
        </form>
      </header>
      <main>
        <h1 className='' id='main-title'>Movies</h1>
        <section id='movie-display'>
          {props.movies.map(movie => <MovieCard key={movie.title} movie={movie}/> )}
        </section>
      </main>
    </div>
  );
}

export default App;
