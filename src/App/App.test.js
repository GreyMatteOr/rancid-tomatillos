import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import MovieCard from '../MovieCard/MovieCard.js';
import Main from '../Main/Main.js';


import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe( 'App', () => {
  it( 'should be able to login a user', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText('username'), 'tinsel@turing.io')
    userEvent.type(screen.getByPlaceholderText('password'), 'zxcvb')

    userEvent.click(screen.getByRole('button', {name: 'submit-credentials'}))
    userEvent.type(screen.getByRole('heading', {name: 'tinsel@turing.io'})).toBeInTheDocument();



  })


//when loads, email and pass input
//when type in stuff, blah blah blah
//then test this fella up there ^^^^^
//test logout functionality as well
//neat

});
