import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import MovieCard from '../MovieCard/MovieCard.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import request from '../api-requests.js';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

let customHistory = createMemoryHistory();
let movies =[];

describe( 'App', () => {

  it('should be able to login a user', () => {

    render(
      <Router history={customHistory}>
        <App movies={movies}/>
      </Router>
    );

    userEvent.type(screen.getByPlaceholderText('user id'), 'tinsel@turing.io');
    userEvent.type(screen.getByPlaceholderText('password'), 'zxcvb');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  })

  it('should be able to logout a user', () => {

    render(
      <Router history={customHistory}>
        <App movies={movies}/>
      </Router>
    );
    
    userEvent.type(screen.getByPlaceholderText('user id'), 'tinsel@turing.io');
    userEvent.type(screen.getByPlaceholderText('password'), 'zxcvb');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  })
});
