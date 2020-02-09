import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import 'bootstrap/dist/css/bootstrap.css';

import ErrorBoundary from './error';

ReactDOM.render(
  <ErrorBoundary>{hasError => <Root hasError={hasError} />}</ErrorBoundary>,
  document.getElementById('root')
);
