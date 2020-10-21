import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FunFacts from './FunFacts.js';

describe( 'FunFacts', () => {
  it( 'should display a fun fact', () =>{
    render(<FunFacts />);
    expect(screen.getByTestId('fun-facts')).toBeInTheDocument();
  });
});
