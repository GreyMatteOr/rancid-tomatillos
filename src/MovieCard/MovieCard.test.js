import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard.js';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

let customHistory = createMemoryHistory();


describe( 'MovieCard', () => {
  let mockMovie = {
    poster: '',
    title: '',
    average_rating: 'global rating',
    id: '17',
  }

  it( 'should display a movie-card', () =>{

    render(
      <Router history={customHistory}>
        <MovieCard movie={mockMovie}/>
      </Router>
    );

    expect(screen.getByText('global rating')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it( 'should navigate to the movie details url of the movie on click', () => {

    render(
      <Router history={customHistory}>
        <MovieCard movie={mockMovie}/>
      </Router>
    );

    userEvent.click(screen.getByRole('movie-card'));
    expect(customHistory.entries[1].pathname).toEqual('/movieDetails/17');
  });

  it( 'should remove the `MovieModal` after another click', () => {

    render(
      <Router history={customHistory}>
        <MovieCard movie={mockMovie}/>
      </Router>
    );

    userEvent.click(screen.getByRole('movie-card'));
    userEvent.click(screen.getByRole('overlay'));
    expect(screen.queryByRole('overlay')).toBeNull();
    expect(screen.queryByRole('movie-modal')).toBeNull();
  });
});
