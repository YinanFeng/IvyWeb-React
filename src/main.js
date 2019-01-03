import React from "react";
import { render } from "react-dom";
import TabReducer from "./reducer/TabReducer"; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';
import 'antd/dist/antd.css';
import MainNavContainer from "./container/MainNavContainer";


const store = createStore(TabReducer);


render(
    <Provider store={store}>
        <MainNavContainer />

    </Provider>
    , document.getElementById('root'));