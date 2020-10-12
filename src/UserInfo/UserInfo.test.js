import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard/MovieCard.js';
import Header from '../Header/Header.js';
import App from '../App.js';
import Main from '../Main/Main.js';
import UserInfo from './UserInfo/UserInfo.js';
import request from '../api-requests.js';


describe( 'UserInfo', () => {

  it('should allow for a user to log in', () => {
    let movies =[];
    render(<App movies={movies} debug={true}/>);

    expect(screen.getByRole('header', { name: 'Please log in!' }))
  })

  // it('should allow for a user to log out', () => {
  //   let movies =[];
  //   render(<App movies={movies} debug={true}/>);
  //
  //
  // })
  //
  // it('should display user\'s email upon login', () => {
  //   let movies =[];
  //   render(<App movies={movies} debug={true}/>);
  //
  // })

});
