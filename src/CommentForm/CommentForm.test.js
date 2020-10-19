import '@testing-library/jest-dom';
import CommentForm from './CommentForm.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';

jest.mock('../api-requests.js');
request.postComment.mockResolvedValue({})

describe('CommentForm', () => {
  let updateCommentsMock = jest.fn();

  describe('when `isLoggedIn` is `false`', () => {

    it('should have an `loading` message', () => {

      render(
        <CommentForm
          isLoggedIn={false}
          userName="Debug-Name"
          loadComments={updateCommentsMock}
        />
      );

      expect(screen.getByText('You must be logged in to comment!')).toBeInTheDocument();
    });
  });

  describe('when `isLoggedIn` is `true`', () => {
    beforeEach(() => {

      render(
        <CommentForm
          isLoggedIn={true}
          userName="Debug-Name"
          loadComments={updateCommentsMock}
          movieID="100"
        />
      );
    });

    it('should have an input field and a `post` button', () => {

      expect(screen.getByPlaceholderText('Leave a comment...')).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'POST!'})).toBeInTheDocument();
    });

    it('should submit the comment when the button is clicked', async () => {

      userEvent.type(screen.getByPlaceholderText('Leave a comment...'), 'Random Comment');
      userEvent.click(screen.getByRole('button', {name: 'POST!'}));

      await waitFor(() => screen.getByPlaceholderText('Leave a comment...').value === '');

      expect(request.postComment).toHaveBeenCalledWith('100', 'Random Comment', 'Debug-Name');
      expect(updateCommentsMock).toHaveBeenCalled();
    });
  });
});
