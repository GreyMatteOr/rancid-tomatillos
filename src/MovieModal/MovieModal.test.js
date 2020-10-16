import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import MovieModal from './MovieModal.js';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';


describe( 'MovieModal', () => {
  let mockRating = {rating:''};
  let customHistory = createMemoryHistory();

  it( 'should display a modal', () =>{

    render(
      <Router history={customHistory}>
        <MovieModal userRating={mockRating}/>
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
  });

  it( 'should display a User Rating when logged in', () => {

    render(
      <Router history={customHistory}>
        <MovieModal isLoggedIn={true} userRating={mockRating}/>
      </Router>
    );

    expect(screen.getAllByAltText(/Rated 0\/10/).length).toEqual(10);
  });

  it( 'should return to the home page when the `x` button is clicked', () => {

    render(
      <Router history={customHistory}>
        <MovieModal userRating={mockRating}/>
      </Router>
    );

    userEvent.click(screen.getByRole('close-modal'));
    expect(customHistory.entries[1].pathname).toEqual('/');
  })
});
