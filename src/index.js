// import { createRoot } from 'react-dom/client';
import React from 'react';
// This is going to allow us to hook our react application into index.html
import ReactDOM from 'react-dom';

// This App file is going to be rendered inside index.html 'root'
import App from './App'
import './index.css'


ReactDOM.render(<App />, document.getElementById('root'));