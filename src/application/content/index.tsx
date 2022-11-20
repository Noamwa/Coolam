import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const body = document.querySelector('body');
const app = document.createElement('div');

app.id = 'root';

if (body) {
  body.prepend(app);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);