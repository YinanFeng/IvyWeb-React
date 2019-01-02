import React from "react";
import { render } from "react-dom";
import TabReducer from "./reducer/TabReducer"; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';
import 'antd/dist/antd.css';
import MainNavContainer from "./container/MainNavContainer";
import LinkedTags from "./components/linkTags/LinkTags";

const store = createStore(TabReducer);


render(
    <Provider store={store}>
        <MainNavContainer />
        <LinkedTags />
    </Provider>
    , document.getElementById('root'));