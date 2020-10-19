import '@testing-library/jest-dom';
import Comments from './Comments.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';

jest.mock('../api-requests.js');
let ids = new Date().getTime();
let comments = [
  {
    id: ids - 2,
    comment: 'one',
    author: 'db-one'
  },
  {
    id: ids - 1,
    comment: 'two',
    author: 'db-two'
  },
  {
    id: ids,
    comment: 'three',
    author: 'db-three'
  }
];
request.getComments.mockResolvedValue({comments: comments});

describe('Comments', () => {

  it('should initially display a `loading` message', () => {

    render(<Comments />);

    expect(screen.getByText('Loading Comments')).toBeInTheDocument();
  });

  it('should display comments after loading them', async () => {
    render(<Comments />);

    await waitFor(() => screen.queryByText('Loading Comments') === null);

    expect(screen.getAllByRole('comment').length).toEqual(3);
    expect(screen.getByText('You must be logged in to comment!')).toBeInTheDocument();

    comments.forEach(comment => {
      expect(screen.getByText(comment.comment)).toBeInTheDocument();
      expect(screen.getByText(`just now by: ${comment.author}`)).toBeInTheDocument();
    });
  });
});
