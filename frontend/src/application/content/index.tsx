import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { wrapAllElements } from '../../domain/element';
const wrappedElements = wrapAllElements();

const body = document.querySelector('body');
const app = document.createElement('div');

app.id = 'coolamRoot';

if (body) {
  body.prepend(app);
}

const root = ReactDOM.createRoot(document.getElementById(app.id) as Element);

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.message === 'complete') {
    root.render(<App wrappedElements={wrappedElements} />);
  }
});
