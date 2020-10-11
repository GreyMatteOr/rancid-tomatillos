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
      globalRating: this.props.movie['average_rating'],
      movieID: this.props.movie['id'],
      popOut: false
    };
  }

  render() {
    console.log(this.state.popOut)
    return (
      <>
        {this.state.popOut
            ? <div className='overlay' onClick={ () => this.setState( {popOut: null} ) }>
              <MovieModal
                movieID={ this.state.movieID }
                userRating={ this.props.movie.userRating }
                isLoggedIn={ this.props.isLoggedIn }
              />
              </div>
            : ''
        }
        <div className='poster' onClick={ () => this.setState({popOut: true}) }>
          <h6 className='global-rating'>{this.state.globalRating}</h6>
          <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        </div>
      </>
    )
  }
}


export default MovieCard;

// <h4>{this.state.title}</h4>
// <h6>URate</h6>
