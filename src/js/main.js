import React from 'react';
import { render } from 'react-dom';

import App from './app';

function main(ev) {
    //let app = new App(elems);
    //window._app = app;
    render(<App />, document.getElementById('app'));

}

window.addEventListener('load', main);
