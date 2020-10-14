import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import request from '../api-requests.js';
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      isLoggedIn: this.props.isLoggedIn || false
    }

    this.displayUserRatings = (userID) => {
      request.getUserRatings(userID)
      .then( ({ratings}) => {
        let update = this.state.movies.map( movie => {
          let userRating = ratings.find( rating => rating.movie_id == movie.id ) || 0;
          movie.userRating = userRating;
          return movie;
        });
        this.setState( {movies: update, isLoggedIn: true, userID: userID} )
      });
    }

    this.hideUserRatings = () => {
      this.setState( {isLoggedIn: false, userID: null})
    }
  }

  render () {
    return (
      <div className="App">
        <Header
          displayUserRatings={this.displayUserRatings}
          hideUserRatings={this.hideUserRatings}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Main
          movies={this.state.movies}
          isLoggedIn={this.state.isLoggedIn}
          userID={this.state.userID}
        />
      </div>
    );
  }
}

export default App;
