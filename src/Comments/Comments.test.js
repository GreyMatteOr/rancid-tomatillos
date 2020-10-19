import '@testing-library/jest-dom';
import Comments from './Comments.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';

jest.mock('../api-requests.js');
request.postComment.mockResolvedValue({})

describe('Comments', () => {

});
