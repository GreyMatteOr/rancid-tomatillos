import React from 'react';
import request from '../api-requests.js';
import './MovieModal.css';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      movieID: this.props.movieID,
      userRating: this.props.userRating,
      isLoggedIn: this.props.isLoggedIn,
      isloading: true
    };
  }

  componentDidMount() {
    request.getMovieDetails(this.state.movieID)
      .then( ({movie}) => {
        console.log(movie)
        movie.isLoading = false;
        this.setState(movie);
      })
      .catch( () => console.log('OH NO'));
  }

  render() {
    if(this.state.isLoading) {
      return <div>LOADING</div>;
    } else {
      return (
        <>
          <div className='modal'>
            <h6 className='global-rating'>Average Rating: {this.state.average_rating}</h6>
            { this.state.isLoggedIn
              ? <h6 className='user-rating'>User Rating: {this.props.userRating}</h6>
              : <></>
            }
            <h6 className='title'>Title: {this.state.title}</h6>
            <h6 className='tagline'>Tagline: {this.state.tagline}</h6>
            <h6 className='releaseDate'>Released: {this.state.release_date}</h6>
            <h6 className='overview'>Description: {this.state.overview}</h6>
            <h6 className='budget'>Budget: {this.state.budget}</h6>
            <h6 className='revenue'>Revenue: {this.state.revenue}</h6>
            <h6 className='runtime'>Runtime: {this.state.runtime}</h6>
            <img className='poster-img' src={this.state.poster_path} alt={`Movie Poster for ${this.state.title}`}/>
            <img className='backdrop-img' src={this.state.backdrop_path} alt={`Backdrop for ${this.state.title}`}/>
          </div>
        </>
      );
    }
  }
}

export default MovieModal;
