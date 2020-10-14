import React from 'react';
import '../App/App.css';
import './MovieCard.css';
import MovieModal from '../MovieModal/MovieModal.js'

class MovieCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      poster: this.props.movie['poster_path'],
      title: this.props.movie['title'],
      globalRating: this.roundToTenth(this.props.movie['average_rating']),
      movieID: this.props.movie['id'],
      popOut: false
    };
  }

  render() {
    return (
      <>
        {this.state.popOut
            ? <div className='overlay' role='overlay'>
              <MovieModal
                movieID={ this.state.movieID }
                userRating={ this.props.movie.userRating }
                isLoggedIn={ this.props.isLoggedIn }
                close={ () => this.setState( {popOut: null} ) }
              />
              </div>
            : ''
        }
        <div className='poster' role='movie-card' onClick={ () => this.setState({popOut: true}) }>
          <h6 className='global-rating'>{this.state.globalRating}</h6>
          <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        </div>
      </>
    )
  }
  //gotta unnest the modal window and put it in app.js for rendering
  //dynamic routing!!!! happens when move stuff to app.js
  //wrap the movie-card in a <Link> </Link> tag!! removes the need for onClick stuff
  //link changes the path!!!
  //when path gets changed to specific thing, render the component.
  //popOut thingy, don't need it anymore
  //tie link to xbutton, OR use a tag called redirect. prolly use link cause we're clicking -> to home or '/' path

  roundToTenth(number) {
    return Math.round(number * 10) / 10;
  }
}


export default MovieCard;
