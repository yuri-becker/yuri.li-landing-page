import React from 'react';
import ReactDOM from 'react-dom';
import {Blog} from './blog/Blog';
import {Projects} from './Projects'
import {Contact} from './Contact'

ReactDOM.render(<Blog />, document.getElementById('blog'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Contact />, document.getElementById('contact'));

