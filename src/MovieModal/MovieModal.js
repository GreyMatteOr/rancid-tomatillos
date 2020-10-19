import React from 'react';
import Comments from '../Comments/Comments.js';
import MovieVideos from '../MovieVideos/MovieVideos.js';
import UserRating from '../UserRating/UserRating.js';
import { Link } from 'react-router-dom';
import './MovieModal.css';
import xToClose from './x-to-close.png';
import request from '../api-requests.js';


class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.movieID,
      movie: this.props.movie,
      isLoggedIn: this.props.isLoggedIn,
      userName: this.props.userName,
      isLoading: true,
      userID: this.props.userID
    };
    console.log(this.userName)
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
        <Link to={`/`}>
          <img className='exit' src={xToClose} role='close-modal' alt='close the pop out display' />
        </Link>
        <h3 className={this.state.isLoading ? 'loading-msg' : 'loading-msg hidden'}>LOADING</h3>
        <section className={this.state.isLoading ? 'text-display' : 'text-display done-loading'} data-testid="movie-details">
          <h3 className='global-rating-modal'>Average Rating: {this.roundToTenth(this.state.average_rating)}</h3>
          {(this.state.isLoggedIn
            ? <UserRating
              rating={this.state.movie.userRating}
              movieID={this.state.movieID}
              userID={this.state.userID} />
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
        <MovieVideos movieID={this.state.movieID} movieName={this.state.title} />
        <Comments
          isLoggedIn={this.state.isLoggedIn}
          movieID={this.state.movieID}
          userName={this.props.userName}
        />
      </div>
    );
  }

  roundToTenth(number) {
    return Math.round(number * 10) / 10;
  }
}

export default MovieModal;
