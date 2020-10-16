import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App.js';
import * as serviceWorker from './serviceWorker';
import request from './api-requests.js';
import { BrowserRouter } from 'react-router-dom';

let movies = [];

request.getMoviesData()
  .then(data => movies = data.movies)
  .then( () => {
    ReactDOM.render(
      <Router>
        <React.StrictMode>
          <App movies={movies}/>
        </React.StrictMode>
      </Router>,

      document.getElementById('root')
    );
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
