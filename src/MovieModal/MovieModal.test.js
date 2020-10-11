import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieModal from './MovieModal.js';

describe( 'MovieModal', () => {
  it( 'should display a modal', () =>{
    render(<MovieModal />);
    expect(screen.getByText('LOADING')).toBeInTheDocument();
    expect(screen.getByText('Average Rating:')).toBeInTheDocument();
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Tagline:')).toBeInTheDocument();
    expect(screen.getByText('Released:')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Budget:')).toBeInTheDocument();
    expect(screen.getByText('Revenue:')).toBeInTheDocument();
    expect(screen.getByText('Runtime:')).toBeInTheDocument();
  });

  it( 'should display a User Rating when logged in', () => {
    render(<MovieModal isLoggedIn={true}/>);

    expect(screen.getByText('User Rating:')).toBeInTheDocument();
  });
});
