import React from 'react';
import request from '../api-requests.js';
import './UserRating.css';
import filledStar from './filledStar.png';
import unfilledStar from './unfilledStar.png';

class UserRating extends React.Component {
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

  parseUpdate(starNumber) {
    if(this.state.ratingID !== null) this.deleteAndUpdateRating(starNumber);
    else this.updateRating(starNumber);
  }

  updateRating(starNumber) {
    request.updateUserRating(starNumber, this.state.movieID, this.state.userID)
    .then( () => {
      request.getUserRatings(this.state.userID)
      .then( ({ ratings }) => {
        let rating = ratings.find( rating => rating.movie_id === this.state.movieID) || {id: null};
        this.setState({rating: starNumber, ratingID: rating.id});
      })
    });
  }

  deleteAndUpdateRating(starNumber) {
    request.deleteUserRating(this.state.ratingID, this.state.userID)
    .then( () => this.updateRating(starNumber))
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
        onClick={() => this.parseUpdate(i)}
      />
      display.push( element )
    }
    return display;
  }
}

export default UserRating;
