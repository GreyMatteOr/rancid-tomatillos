import React from 'react';
import './App.css';
import './MovieCard.css';

class MovieCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      poster: this.props.movie['poster_path'],
      title: this.props.movie['title'],
      globalRating: this.props.movie['average_rating']
    };
  }

  render() {
    return (
      <>
        <h6 className='global-rating'>{this.state.globalRating}</h6>
        <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
      </>
    )
  }
}

export default MovieCard;


// <h4>{this.state.title}</h4>
// <h6>URate</h6>
