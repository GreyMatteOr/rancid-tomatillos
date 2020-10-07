import React from 'react';
import './App.css';

class MovieCard extends React.Component{
  constructor(props) {
    super();
    let movie = props.movie;
    this.state = {
      poster: movie['poster_path'],
      title: movie['title'],
      globalRating: movie['average_rating']
    };
  }

  render() {
    return (
      <>
        <div className='poster'>
          <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
          <h6 className='global-rating'>{this.state.globalRating}</h6>
        </div>
      </>
    )
  }
}

export default MovieCard;

// <h4 classname='movie-title'>{this.state.title}</h4>
// <h6 className='global-rating'>{this.state.globalRating}</h6>
// <h6 classsName='user-rating'>00</h6>
