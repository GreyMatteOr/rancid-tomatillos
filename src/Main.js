import React from 'react';
import MovieCard from './MovieCard.js';

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

export default Main;
