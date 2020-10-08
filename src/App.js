import Header from './Header.js';
import Main from './Main.js';
import request from './api-requests.js';
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
        console.log(ratings)
        let update = this.state.movies.map( movie => {
          let userRating = ratings.find( rating => rating.movie_id == movie.id ) || 0;
          movie.userRating = userRating;
          return movie;
        });
        this.setState( {movies: update } )
        console.log(this.state.movies)
      });
    }
  }

  render () {
    return (
      <div className="App">
        <Header
          displayUserRatings={this.displayUserRatings}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Main
          movies={this.state.movies}
          isLoggedIn={this.state.isLoggedIn}
        />
      </div>
    );
  }
}

export default App;
