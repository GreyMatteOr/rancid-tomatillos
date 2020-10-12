import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo.js';
import request from '../api-requests.js';


describe( 'UserInfo', () => {

  it('should allow for a user to log in', () => {
    render(<UserInfo />);

    expect(screen.getByText('Please log in!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('user id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument();
  })

  it('should allow for a user to log out', () => {
    render(<UserInfo isLoggedIn={true}/>);

    expect(screen.getByRole('button', {name: 'Log out, ya dingus!'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Welcome,'})).toBeInTheDocument();
  })



});
