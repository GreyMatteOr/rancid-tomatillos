import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import UserRating from './UserRating.js';
import request from '../api-requests.js';
jest.mock('../api-requests.js');
request.deleteUserRating.mockResolvedValue({});
request.updateUserRating.mockResolvedValue({});
request.getUserRatings.mockResolvedValue({ratings: []});

let mockNoRating = {};
let mockRating ={rating:6, id:14};

describe( 'UserRating', () => {

  it( 'should display ten stars', () =>{

    render(<UserRating rating={mockRating}/>)
    expect(screen.getAllByAltText(/Rated 6\/10/).length).toEqual(10);
  });

  it( 'should have the number of filled stars equal to the rating',() => {

    render(<UserRating rating={mockRating}/>)

    let stars = screen.getAllByAltText(/Rated 6\/10/);
    let filledStars = stars.filter(star => star.src === 'http://localhost/filledStar.png');
    let unfilledStars = stars.filter(star => star.src === 'http://localhost/unfilledStar.png');

    expect(filledStars.length).toEqual(6);
    expect(unfilledStars.length).toEqual(4);
  });

  it( 'should POST request when clicked with no rating', async () => {
    render(<UserRating rating={mockNoRating} userID='77'/>);

    let stars = screen.getAllByAltText(/Rated 0\/10/);
    userEvent.click(stars[4]);

    expect(request.updateUserRating).toHaveBeenCalledWith(5, undefined, '77');
    await waitFor(() => screen.getAllByAltText(/Rated 5\/10/).length === 10);

    expect(request.getUserRatings).toHaveBeenCalledWith('77')
  });

  it( 'should DELETE and POST when clicked with a rating', async () => {
    render(<UserRating rating={mockRating} userID='77'/>);

    let stars = screen.getAllByAltText(/Rated 6\/10/);
    userEvent.click(stars[4]);

    expect(request.deleteUserRating).toHaveBeenCalledWith(14, '77');
    await waitFor(() => {});

    expect(request.updateUserRating).toHaveBeenCalledWith(5, undefined, '77');
    await waitFor(() => screen.getAllByAltText(/Rated 5\/10/).length === 10);

    expect(request.getUserRatings).toHaveBeenCalledWith('77')
  });
});
