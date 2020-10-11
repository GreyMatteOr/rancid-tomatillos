import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main.js';

describe( 'Main', () => {
  it( 'should display an Title', () =>{
    render(<Main movies={[]}/>);
    expect(screen.getByText('Movies')).toBeInTheDocument();
  });

  it( 'should display no `MovieCard`s when `movies` is empty', () => {
    render(<Main movies={[]}/>);
    expect(screen.queryByRole('movie-card')).toBeNull();
  });

  it( 'should display 1 `MovieCard` for each element in `movies`', () => {
    render(<Main movies={[{title:1},{title:2},{title:3}]}/>);
    expect(screen.queryAllByRole('movie-card').length).toEqual(3);
  });
});
