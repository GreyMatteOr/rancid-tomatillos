import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard.js';

describe( 'MovieCard', () => {
  let mockMovie = {
    poster: '',
    title: '',
    average_rating: 'global rating',
    id: '',
  }

  it( 'should display a movie-card', () =>{

    render(<MovieCard movie={mockMovie}/>);
    expect(screen.getByText('global rating')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it( 'should display a `MovieModal` on click', () => {

    render(<MovieCard movie={mockMovie}/>);
    userEvent.click(screen.getByRole('movie-card'));
    expect(screen.getByRole('overlay')).toBeInTheDocument();
    expect(screen.getByRole('movie-modal')).toBeInTheDocument();
  });

  it( 'should remove the `MovieModal` after another click', () => {

    render(<MovieCard movie={mockMovie}/>);
    userEvent.click(screen.getByRole('movie-card'));
    userEvent.click(screen.getByRole('overlay'));
    expect(screen.queryByRole('overlay')).toBeNull();
    expect(screen.queryByRole('movie-modal')).toBeNull();
  });
});
