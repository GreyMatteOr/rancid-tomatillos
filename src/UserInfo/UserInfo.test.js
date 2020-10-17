import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import UserInfo from './UserInfo.js';
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';
jest.mock('../api-requests.js');

describe( 'UserInfo', () => {

  it('should allow for a user to log in', () => {
    render(<UserInfo />);

    expect(screen.getByText('Please log in!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('user id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument();
  });

  it('should allow for a user to log out', () => {
    render(<UserInfo isLoggedIn={true}/>);

    expect(screen.getByRole('button', {name: 'Log out'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Welcome,'})).toBeInTheDocument();
  });

  it('should log in when a `happy` response is received', async () => {

    request.attemptLogin.mockResolvedValueOnce(
      {
        user:
        {
          name: 'debug', 
          id: 1
        }
      }
    );

    render(<UserInfo attemptLogin={request.attemptLogin}/>);
    userEvent.click(screen.getByRole('button', {name: 'Submit'}));

    const logoutButton = await waitFor(() => screen.getByRole('button', {name: 'Log out'}));
    const welcomeMSG = await waitFor(() => screen.getByRole('heading', {name: 'Welcome, debug'}));

    expect(logoutButton).toBeInTheDocument();
    expect(welcomeMSG).toBeInTheDocument();
    expect(request.attemptLogin).toHaveBeenCalled();
    expect(request.attemptLogin).toHaveBeenCalledWith('', '');
  });
});
