/**
 * Created by jr1500 on 9/09/15.
 */

import './main.css';

import React from 'react';
import App from './components/App.jsx';


main();


function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
}
