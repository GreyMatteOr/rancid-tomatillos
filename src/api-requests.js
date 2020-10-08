let request = {
  url: 'https://rancid-tomatillos.herokuapp.com/api/v2',

  attempLogin(email, password) {
    console.log(email, password)
    let body = JSON.stringify({email: email, password: password});
    return fetch(this.url + '/login', {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => response.json());
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

  getMovieData() {
    return fetch(this.url +'/movies')
      .then(response => response.json());
  }
}

export default request;
