import React from 'react';
import rtIcon from './tomatillo-icon.png';
import MovieCard from './MovieCard.js';
import './App.css';
import './MovieCard.css';
import './header.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <Main movies={props.movies}/>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header>
        <UserInfo />
        <Logo />
        <SearchForm />
      </header>
    );
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>
        <button classname='logout-button'>Log out, ya dingus</button>
        <h1 className='welcome' id='welcome-msg'>Welcome, User!</h1>
      </section>
    )
  }
}

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='logo'>
        <img className='logo-pic' src={rtIcon} alt='The RT Logo'/>
        <section className='header-text'>
          <h1 className='site-title'>Rancid Tomatillos</h1>
          <h3 className='quote'>'Some clever quote!'</h3>
        </section>
      </section>
    )
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input placeholder='Find a Flick'/>
      </form>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies
    }

  }

  render() {
    return (
      <main>
        <h1 className='' id='main-title'>Movies</h1>
        <section id='movie-display'>
          {this.state.movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
        </section>
      </main>
    )
  }
}

export default App;
