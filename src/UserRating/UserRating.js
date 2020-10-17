import React from 'react';
import request from '../api-requests.js';
import UserRating from '../UserRating/UserRating.js';
import './UserRating.css';
import filledStar from './filledStar.png';
import unfilledStar from './unfilledStar.png';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
      rating: this.props.rating.rating || 0,
      movieID: this.props.movieID,
      ratingID: this.props.rating.id || null,
    };
    this.isError = false;
  }

  updateRating(starNumber) {
    if(this.state.ratingID !== null) this.deleteAndUpdateRating(starNumber);
    else {
      request.updateUserRating(starNumber, this.state.movieID, this.state.userID)
      .then( () => {
        this.setState({rating: starNumber})
      });
    }
  }

  deleteAndUpdateRating(starNumber) {
    request.deleteUserRating(this.state.ratingID, this.state.userID)
    .then( () => {
      request.updateUserRating(starNumber, this.state.movieID, this.state.userID)
      .then( () => {
        request.getUserRatings(this.state.userID)
        .then( ({ ratings }) => {
          let rating = ratings.find( rating => rating.movie_id === this.state.movieID) || {id: null};
          this.setState({rating: starNumber, ratingID: rating.id});
        })
      });
    })
    .catch(response => console.log(response));
  }

  render() {
    let display = [];
    for (let i = 1; i <= 10; i++){
      let element = <img
        className='rating-star'
        key={`star${i}`}
        src={i <= this.state.rating ? filledStar : unfilledStar}
        alt={`Rated ${this.state.rating}/10`}
        onClick={() => this.updateRating(i)}
        />
      display.push( element )
    }
    return display;
  }
}

export default MovieModal;
