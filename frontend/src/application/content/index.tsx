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

ReactDOM.createRoot(document.getElementById('coolamRoot') as Element).render(<App wrappedElements={wrappedElements}/>);