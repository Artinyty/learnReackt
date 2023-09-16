import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();







