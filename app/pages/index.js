// Home (aka index.html)
import React from 'react';
import ReactDOM from 'react-dom';

import Toast from 'components/Toast'; 
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 

ReactDOM.render(<Toast />, document.getElementById('toast'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
