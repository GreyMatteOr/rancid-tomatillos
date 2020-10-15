let request = {
  url: 'https://rancid-tomatillos.herokuapp.com/api/v2',
  attemptLogin(email, password) {
    // let body = JSON.stringify({email: email, password: password});
    let body = JSON.stringify({email: 'tinsel@turing.io', password: 'zxcvb'});
    return fetch(request.url + '/login', {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log(response)
      return response.json();
    })
  },

  getMovieDetails(movieID) {
    return fetch(request.url + `/movies/${movieID}`)
      .then(response => response.json());
  },

  getMovieVideos(movieID) {
    return fetch(request.url + `/movies/${movieID}/videos`)
      .then(response => response.json());
  },

  deleteUserRating(ratingID, userID) {
    return fetch(request.url + `/users/${userID}/ratings/${ratingID}`, {
        method: 'DELETE'
      }
    )
  },

  updateUserRating(movieRating, movieID, userID) {
    let body = JSON.stringify({ movie_id: movieID, rating: movieRating });
    return fetch(request.url + `/users/${userID}/ratings`, {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => response.json());
  },
  //
  // deleteTripRequest(tripID) {
  //   let data = {
  //     id: tripID,
  //   };
  //   let update = JSON.stringify(data);
  //   return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
  //       method: 'DELETE',
  //       body: update,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  // },

  getMoviesData() {
    return fetch(request.url + '/movies')
      .then(response => response.json());
  },

  getUserRatings(userID) {
    return fetch(request.url + `/users/${userID}/ratings`)
      .then(response => response.json());
  }
}

export default request;
