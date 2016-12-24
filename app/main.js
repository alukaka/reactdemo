//main.js入口文件
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDom from 'react-dom';
import AppComponent from './components/AppComponent.jsx';
ReactDom.render(
    <AppComponent />,
    document.getElementById('app')
);
