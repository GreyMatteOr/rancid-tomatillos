import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import MovieModal from '../MovieModal/MovieModal.js';
import MovieVideos from '../MovieVideos/MovieVideos.js';
import request from '../api-requests.js';
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

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
        <Route path='/' render={ () => <Header
          displayUserRatings={this.displayUserRatings}
          hideUserRatings={this.hideUserRatings}
          isLoggedIn={this.state.isLoggedIn}
        />} />
        <Route path='/' render={ () => <Main
          movies={this.state.movies}
          isLoggedIn={this.state.isLoggedIn}
        />} />
        <Route exact path='/movieDetails/:id'
        render={({ match }) => {
          const { id } = match.params;
          const movie = this.state.movies.find(movie => movie.id === parseInt(id));
          return <MovieModal movieID={movie.id} userRating={this.state.userRating} isLoggedIn={this.state.isLoggedIn} /> }} />
      </div>
    );
  }
}


export default App;
