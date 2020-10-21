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
      userID: this.props.userID,
      backdrop: this.props.backdrop
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
          backgroundSize: "100% auto",

        }}
      >

        <Link to={`/`}>
          <img className='exit' src={xToClose} role='close-modal' alt='close the pop out display' />
        </Link>
        <h3 className={this.state.isLoading ? 'loading-msg' : 'loading-msg hidden'}>LOADING</h3>
        <section className={this.state.isLoading ? 'text-display' : 'text-display done-loading'} data-testid="movie-details">

          <h3 className='title movietitle'>{ this.state.title }</h3>

          <section className='under-title'>
            <h3 className='global-rating-modal'>Average Rating ; {this.roundToTenth(this.state.average_rating)}</h3>
            <h3 className='releaseDate'>Release Date ; {this.state.release_date}</h3>
          </section>
          <section className='main-modal-area'>
            <section className='description-area'>
              <h3 className='overview'>{this.state.overview}</h3>
              <h3 className='tagline'> '{ this.state.tagline }'</h3>
            </section>

            <section className='rating-area'>
              {(this.state.isLoggedIn
                ? <UserRating
                  rating={this.state.movie.userRating}
                  movieID={this.state.movieID}
                  userID={this.state.userID} />
                  : <></>
                )}
            </section>

            <section className='etc-info'>
              <h3 className='budget'>Budget: {this.state.budget}</h3>
              <h3 className='revenue'>Revenue: {this.state.revenue}</h3>
              <h3 className='runtime'>Runtime: {this.state.runtime}</h3>
            </section>

          </section>
          <MovieVideos movieID={this.state.movieID} movieName={this.state.title} />
          <Comments
            isLoggedIn={this.state.isLoggedIn}
            movieID={this.state.movieID}
            userName={this.props.userName}
          />
        </section>

      </div>
    );
  }

  roundToTenth(number) {
    return Math.round(number * 10) / 10;
  }
}

export default MovieModal;
