import React from 'react';
import request from '../api-requests.js';
import MovieVideos from '../MovieVideos/MovieVideos.js';
import './MovieModal.css';
import xToClose from './x-to-close.png';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.movieID,
      userRating: this.props.userRating,
      isLoggedIn: this.props.isLoggedIn,
      isLoading: true,
      close: this.props.close
    };
  }

  componentDidMount() {
    request.getMovieDetails(this.state.movieID)
      .then( ({movie}) => {
        movie.isLoading = false;
        this.setState(movie);
      })
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div
        className='modal'
        role='movie-modal'
        style={{
          backgroundImage: 'url('+this.state.backdrop_path+')',
          backgroundSize: "100% auto"
        }}
      >
        <img className='exit' src={xToClose} alt='close the pop out' onClick={this.state.close}/>
        <h3 className={this.state.isLoading ? '.done-loading' : '.done-loading hidden'}>LOADING</h3>
        <section className={this.state.isLoading ? 'text-display' : 'text-display done-loading'}>
          <h3 className='global-rating-modal'>Average Rating: {this.state.average_rating}</h3>
          {(this.state.isLoggedIn
            ? <h3 className='user-rating'>User Rating: {this.state.userRating}</h3>
            : <></>
          )}
          <h3 className='title'>Title: { this.state.title }</h3>
          <h3 className='tagline'>Tagline: { this.state.tagline }</h3>
          <h3 className='releaseDate'>Released: {this.state.release_date}</h3>
          <h3 className='overview'>Description: {this.state.overview}</h3>
          <h3 className='budget'>Budget: {this.state.budget}</h3>
          <h3 className='revenue'>Revenue: {this.state.revenue}</h3>
          <h3 className='runtime'>Runtime: {this.state.runtime}</h3>
        </section>
        <MovieVideos movieID={this.state.movieID}/>
      </div>
    );
  }
}

export default MovieModal;
