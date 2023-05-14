import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import  {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';



const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render(<Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</Provider>);


