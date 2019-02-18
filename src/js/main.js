global.JQuery = require('jquery');
require('popper.js');
require('bootstrap');

import React from 'react';
import { render } from 'react-dom';

import App from './app';

function main(ev) {
    render(<App />, document.getElementById('app'));
}

window.addEventListener('load', main);
