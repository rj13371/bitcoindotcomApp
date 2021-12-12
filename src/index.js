import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChartProvider } from './context/ChartContext';

ReactDOM.render(
  <ChartProvider>
  <App />
  </ChartProvider>,
  document.getElementById('root')
);

