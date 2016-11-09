import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"

import store from "./store"
import MainController from "./controllers/MainController"
const app=document.querySelector('.app');
console.log('wdqads',app);
ReactDom.render(
  <Provider store={store}>
    <MainController></MainController>
  </Provider>
,app)
