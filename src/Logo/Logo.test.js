import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Logo from './Logo.js'

describe( 'Logo', () => {
  it( 'should display an image', () =>{
    render(<Logo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
