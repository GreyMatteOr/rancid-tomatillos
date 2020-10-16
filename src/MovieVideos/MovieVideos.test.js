import '@testing-library/jest-dom';
import MovieVideos from './MovieVideos.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';

jest.mock('../api-requests.js');
request.getMovieVideos.mockResolvedValue({videos: []});

describe( 'MovieVideos', () => {

  it( 'should start off displaying a loading message', () =>{

    render(<MovieVideos />);
    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  it( 'should fetch movie videos data and display them', async () => {

    render(<MovieVideos movieID='43'/>);

    const videoGrid = await waitFor(() => screen.getByRole('movie-videos'));

    expect(request.getMovieVideos).toHaveBeenCalled();
    expect(request.getMovieVideos).toHaveBeenCalledWith('43');
  });
});
