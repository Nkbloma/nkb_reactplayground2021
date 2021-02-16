import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  The way React works is that it first starts here. The index.js is what is
  displayed on the web browser and the component App is the entire project,
  imported from the class in App.js and holding all the functionality..
  Below this layer are the sub components that make up "App".
*/