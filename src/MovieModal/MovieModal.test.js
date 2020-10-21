import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import MovieModal from './MovieModal.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';

jest.mock('../api-requests.js');
request.getMovieDetails.mockResolvedValue(
  {
    movie: {
      id: 1,
      title: "Movie Title",
      poster_path: "someURL",
      backdrop_path: "someURL",
      release_date: "2019-12-04",
      overview: "Some overview",
      average_rating: 6,
      genres: [{id: 18, name:"Drama"}],
      budget:63000000,
      revenue:100853753,
      runtime:139,
      tagline: "Movie Tagline"
    }
  }
);

request.getMovieVideos.mockResolvedValue({videos: []});
request.getComments.mockResolvedValue({comments: []});

describe( 'MovieModal', () => {
  let mockRating = {rating:''};
  let mockMovie = {userRating: mockRating};
  let customHistory = createMemoryHistory();

  it( 'should display a modal', () =>{

    render(
      <Router history={customHistory}>
        <MovieModal movie={mockMovie}/>
      </Router>
    );

    expect(screen.getByText('LOADING')).toBeInTheDocument();
    expect(screen.getByText('Average Rating: NaN')).toBeInTheDocument();
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Tagline:')).toBeInTheDocument();
    expect(screen.getByText('Released:')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Budget:')).toBeInTheDocument();
    expect(screen.getByText('Revenue:')).toBeInTheDocument();
    expect(screen.getByText('Runtime:')).toBeInTheDocument();
    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  it( 'should display a User Rating when logged in', () => {

    render(
      <Router history={customHistory}>
        <MovieModal isLoggedIn={true} movie={mockMovie}
        movieID="03"/>
      </Router>
    );

    expect(screen.getAllByAltText(/Rated 0\/10/).length).toEqual(10);
  });

  it( 'should return to the home page when the `x` button is clicked', () => {

    render(
      <Router history={customHistory}>
        <MovieModal movie={mockMovie}/>
      </Router>
    );

    userEvent.click(screen.getByTestId('close-modal'));
    expect(customHistory.entries[1].pathname).toEqual('/');
  });

  it('should fetch movie data and display it', async () => {

    render(
      <Router history={customHistory}>
        <MovieModal
          getMovieDetails={request.getMovieDetails}
          movieID='43'
          movie={mockMovie}
        />
      </Router>
    );

    //This tests the before display-styles
    expect(screen.getByText('LOADING').className).toEqual('loading-msg');
    expect(screen.getByTestId('movie-details').className).toEqual('text-display');

    //When this happens, everything is finished
    const avgRating = await waitFor(() => screen.getByText('Average Rating: 6'));

    //This tests everything is displaying the correct text
    expect(avgRating).toBeInTheDocument();
    expect(screen.getByText('LOADING')).toBeInTheDocument();
    expect(screen.getByText('Average Rating: 6')).toBeInTheDocument();
    expect(screen.getByText('Title: Movie Title')).toBeInTheDocument();
    expect(screen.getByText('Tagline: Movie Tagline')).toBeInTheDocument();
    expect(screen.getByText('Released: 2019-12-04')).toBeInTheDocument();
    expect(screen.getByText('Description: Some overview')).toBeInTheDocument();
    expect(screen.getByText('Budget: 63000000')).toBeInTheDocument();
    expect(screen.getByText('Revenue: 100853753')).toBeInTheDocument();
    expect(screen.getByText('Runtime: 139')).toBeInTheDocument();
    expect(request.getMovieDetails).toHaveBeenCalled();
    expect(request.getMovieDetails).toHaveBeenCalledWith('43');

    //This tests the after display-styles
    expect(screen.getByText('LOADING').className).toEqual('loading-msg hidden');
    expect(screen.getByTestId('movie-details').className).toEqual('text-display done-loading');
  });
});
