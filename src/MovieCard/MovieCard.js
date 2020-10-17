import React from 'react';
import '../App/App.css';
import './MovieCard.css';
import MovieModal from '../MovieModal/MovieModal.js'
import { Route, Link } from 'react-router-dom';


class MovieCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      poster: this.props.movie['poster_path'],
      title: this.props.movie['title'],
      globalRating: this.roundToTenth(this.props.movie['average_rating']),
      movieID: this.props.movie['id'],
      // popOut: false
    };
  }

  render() {
    return (
      <section className='clickarea'>
      <Link to={`/movieDetails/${this.state.movieID}`}>
        <h6 className='global-rating'>{this.state.globalRating}</h6>
        <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        </Link>
      </section>
    )
  }

  roundToTenth(number) {
    return Math.round(number * 10) / 10;
  }
}


export default MovieCard;
