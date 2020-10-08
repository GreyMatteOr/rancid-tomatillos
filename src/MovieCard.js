import React from 'react';
import './App.css';
// import './MovieCard.css';

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
<<<<<<< HEAD
        <h6>{this.state.globalRating}</h6>
        <h6>URate</h6>
        <img src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        <h4>{this.state.title}</h4>
=======
        <div className='poster'>
          <h6 className='global-rating'>{this.state.globalRating}</h6>
          <img className='poster-img' src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        </div>
>>>>>>> 7b043637397484aa2fb7a60c5ee7f767b766c8f0
      </>
    )
  }
}

export default MovieCard;
<<<<<<< HEAD
=======

// <h4>{this.state.title}</h4>
// <h6>URate</h6>
>>>>>>> 7b043637397484aa2fb7a60c5ee7f767b766c8f0
