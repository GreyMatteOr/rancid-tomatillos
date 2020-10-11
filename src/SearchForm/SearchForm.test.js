import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm.js';

describe( 'SearchForm', () => {
  it( 'should display a search input', () =>{
    render(<SearchForm />);
    expect(screen.getByPlaceholderText('Find a Flick')).toBeInTheDocument();
  });
});
