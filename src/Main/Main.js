import MovieCard from '../MovieCard/MovieCard.js';
import React from 'react';

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
        <h1 className='main-title' id='main-title'>Movies</h1>
        <section id='movie-display'>
          {this.state.movies.map(movie => {
            return <MovieCard
                    key={movie.title}
                    movie={movie}
                    isLoggedIn={this.props.isLoggedIn}
                    />
            })
          }
        </section>
      </main>
    )
  }
}

export default Main;
