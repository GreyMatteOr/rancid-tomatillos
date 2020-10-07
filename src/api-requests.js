let request = {
  url: 'https://rancid-tomatillos.herokuapp.com/api/v2',
  // 
  // postNewTripRequest(trip) {
  //   console.log(trip)
  //   let data = {
  //     id: trip.id,
  //     userID: trip.userID,
  //     destinationID: trip.destinationID,
  //     travelers: trip.travelers,
  //     date: time.createYYYYMMDD(trip.date),
  //     duration: trip.duration,
  //     status: trip.status,
  //     suggestedActivities: trip.suggestedActivities
  //   };
  //   let update = JSON.stringify(data);
  //   return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
  //       method: 'POST',
  //       body: update,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  // },
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
