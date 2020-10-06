import React from 'react';
import './App.css';

class MovieCard extends React.Component{
  constructor(props) {
    super();
    this.state = props;
  }

  render() {
    return (
      <>
        <h6>GRate</h6>
        <h6>URate</h6>
        <img src='' alt='<Movie> Poster'/>
        <h4>[Movie] Title</h4>
      </>
    )
  }
}

export default MovieCard;
