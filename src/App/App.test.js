import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import MovieCard from '../MovieCard/MovieCard.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import request from '../api-requests.js';




import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe( 'App', () => {
  it( 'should be able to login a user', () => {
    let movies =[];
    render(<App movies={movies} debug={true}/>);

    userEvent.type(screen.getByPlaceholderText('user id'), 'tinsel@turing.io');
    userEvent.type(screen.getByPlaceholderText('password'), 'zxcvb');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByRole('heading', { name: 'tinsel@turing.io' }))



  })


//when loads, email and pass input
//when type in stuff, blah blah blah
//then test this fella up there ^^^^^
//test logout functionality as well
//neat

});
