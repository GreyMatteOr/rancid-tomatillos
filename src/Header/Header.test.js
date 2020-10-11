import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.js';

describe( 'Header', () => {

  describe( 'UserInfo', () => {
    it( 'should display a Header element', () =>{

      render(<Header isLoggedIn={false}/>)
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it( 'should display a login form when `isLoggedIn` is `false`', () =>{

      render(<Header isLoggedIn={false}/>)
      expect(screen.getByPlaceholderText('user id')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it( 'should display a logout form when `isLoggedIn` is `true`', () =>{

      render(<Header isLoggedIn={true}/>)
      expect(screen.getByText('Log out')).toBeInTheDocument();
    });
  });

  describe( 'Logo', () => {
    it( 'should display a Logo', () =>{

      render(<Header isLoggedIn={false}/>)
      expect(screen.getByRole('logo')).toBeInTheDocument();
    });
  });

  describe( 'SearchForm', () => {
    it( 'should display a SearchForm', () =>{

      render(<Header isLoggedIn={false}/>)
      expect(screen.getByRole('search-form')).toBeInTheDocument();
    });
  });
});
