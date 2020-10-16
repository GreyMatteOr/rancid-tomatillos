import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import MovieModal from './MovieModal.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import request from '../api-requests.js';
jest.mock('../api-requests.js');
