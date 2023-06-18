import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider, createStoreHook} from "react-redux"
import store from './store.js'
import ScrollToTop from './scrollTop.js';
import { createStore } from "redux";


//action 객체를 리턴하는 함수 생성
export const increase = () => {
  return {
    type: "INCREASE"
  };
};

export const decrease = () => {
  return {
    type: "DECREASE"
  };
};

const count = 1;
// reducer 생성
const reducer = (state = count, action) => {
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case "INCREASE":
      return state + 1;

    // action === 'DECREASE'일 경우
    case "DECREASE":
      return state - 1;

    // action === 'SET_NUMBER'일 경우
    case "SET_NUMBER":
      return action.payload;

    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const root = createRoot(rootElement);
const store = createStore();


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
      <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)





