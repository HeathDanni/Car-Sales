import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore();

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider><App /></Provider>, rootElement);
