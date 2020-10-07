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
        <h6>{this.state.globalRating}</h6>
        <h6>URate</h6>
        <img src={this.state.poster} alt={`Movie Poster for ${this.state.title}`}/>
        <h4>{this.state.title}</h4>
      </>
    )
  }
}

export default MovieCard;
