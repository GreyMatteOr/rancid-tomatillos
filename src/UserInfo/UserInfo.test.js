import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo.js';
import request from '../api-requests.js';


describe( 'UserInfo', () => {

  it('should allow for a user to log in', () => {
    let movies =[];
    render(<UserInfo />);


  })

  // it ('should allow for a user to log out', () => {
  //   let movies =[];
  //   render(<App movies={movies} debug={true}/>);
  //
  //   userEvent.type(screen.getByPlaceholderText('user id'), 'tinsel@turing.io');
  //   userEvent.type(screen.getByPlaceholderText('password'), 'zxcvb');
  //   userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  //
  //   expect(screen.getByRole('header', { name: 'tinsel@turing.io' }))
  // })

});
