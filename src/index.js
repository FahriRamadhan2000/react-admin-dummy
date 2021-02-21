import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRoute from './route/PageRoute'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <PageRoute />
  </Router>,
  document.getElementById('root')
);
