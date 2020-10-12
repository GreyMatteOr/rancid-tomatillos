import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Logo from './Logo.js';

describe( 'Logo', () => {
  it( 'should display an image, h1, and h3', () =>{
    render(<Logo />);
    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
    expect(screen.getByText('\'Some clever quote!\'')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
