// const React = require('react');
// const ReactDom = require('react-dom');
// const { hot } = require('react-hot-loader/root');
// const WordRelay = require('./WordRelay');
// const NumberBaseball = require('./NumberBaseball');

import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './RenderTest';

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));