import React from 'react';
import {render} from 'react-dom';

import filmList from './wiff.json';

import Layout from './layout.jsx';

console.log(filmList[0]);
render(<Layout/>, document.getElementById('application'));

