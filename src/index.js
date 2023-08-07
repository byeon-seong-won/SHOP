import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux'; 
import cartReducer from './reducer/cartReducer';
import modalReducer from './reducer/modalReducer';
import hvmodalReducer from './reducer/hovermodal';




// reducer 합치기
const store = configureStore({
  reducer:{
    cart : cartReducer,
    modalstate : modalReducer,
    hvmodalstate : hvmodalReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
); 

reportWebVitals();
