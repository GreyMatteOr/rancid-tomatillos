import MovieCard from '../MovieCard/MovieCard.js';
import React from 'react';
import App from '../App/App.js';
import './Main.css';


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
        <section className='main-title-area'>
          <h1 className='main-title' id='main-title'>Vol. 22 No. 23</h1>
          <h1 className='main-title-editor' id='main-title'>EDITORS ;<br /> BRIGETTE DOELP<br />MATTHEW LANE ESQ.</h1>
          <h1 className='main-title' id='main-title'>TODAY'S HOTTEST TALKIES</h1>
          <h1 className='main-title-copyright' id='main-title'>COPYRIGHT, 1928<br />DOELP LN. INC</h1>
          <h1 className='main-title' id='main-title'>TEN CENTS</h1>
        </section>
        <section id='movie-display'>
          <section className='movie-poster'>
            {this.state.movies.map(movie => {
              return <MovieCard
                      key={movie.title}
                      movie={movie}
                      isLoggedIn={this.props.isLoggedIn}
                      userID={this.props.userID}
                      />
              })
            }
          </section>
        </section>
      </main>
    )
  }
}

export default Main;
