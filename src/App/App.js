import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import MovieModal from '../MovieModal/MovieModal.js';
import request from '../api-requests.js';
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      isLoggedIn: this.props.isLoggedIn || false,
      noScroll: false
    }
  }

  displayUserRatings = (userID, userName) => {
    request.getUserRatings(userID)
    .then( ({ratings}) => {
      let update = this.state.movies.map( movie => {
        let userRating = ratings.find( rating => +rating.movie_id === +movie.id );
        movie.userRating = userRating || {rating: 0};
        return movie;
      });
      this.setState({
        movies: update,
        isLoggedIn: true,
        userID: userID,
        userName: userName
      });
    });
  }

  hideUserRatings = () => {
    this.setState( {isLoggedIn: false, userID: null})
  }

  setModalCallBack = (func) => {
    this.modalCallBack = func;
  }

  render () {
    console.log('App.', this.state)
    return (
      <div className="App">
        <Route path='/' render={() => {
          return (
            <Header
              displayUserRatings={this.displayUserRatings}
              hideUserRatings={this.hideUserRatings}
              isLoggedIn={this.state.isLoggedIn}
              movies={this.state.movies}
            />
          )}}
        />
        <Route path='/' render={ () => {
          return (
            <Main
              movies={this.state.movies}
              isLoggedIn={this.state.isLoggedIn}
              setModalCallBack={this.setModalCallBack}
            />
          )}}
        />
        <Route exact path='/movieDetails/:id' render={ ({ match }) => {
          const { id } = match.params;
          const movie = this.state.movies.find(movie => movie.id === parseInt(id));
          return (
            <div className='overlay' >
              <MovieModal
                movieID={movie.id}
                movie={movie}
                isLoggedIn={this.state.isLoggedIn}
                userName={this.state.userName}
                userID={this.state.userID}
                setNoScroll={this.modalCallBack}
              />
            </div>
          )}}
        />
      </div>
    );
  }
}


export default App;
