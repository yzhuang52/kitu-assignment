import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import {Provider} from "react-redux";
const store = configureStore({reducer: searchReducer});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


