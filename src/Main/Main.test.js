import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main.js';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

let customHistory = createMemoryHistory();

describe( 'Main', () => {

  it( 'should display an Title', () =>{

    render(
      <Router history={customHistory}>
        <Main movies={[]}/>
      </Router>
    );

    expect(screen.getByText('Movies')).toBeInTheDocument();
  });

  it( 'should display no `MovieCard`s when `movies` is empty', () => {

    <Router history={customHistory}>
      <Main movies={[]}/>
    </Router>

    expect(screen.queryByRole('movie-card')).toBeNull();
  });

  it( 'should display 1 `MovieCard` for each element in `movies`', () => {
    render (
      <Router history={customHistory}>
        <Main
          movies={
            [
              {title:1, average_rating: 1},
              {title:2, average_rating:2},
              {title:3, average_rating: 3}
            ]
          }
        />
      </Router>
    )
    expect(screen.queryAllByRole('movie-card').length).toEqual(3);
  });
});
