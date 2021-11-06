import { createStore, combineReducers, applyMiddleware } from "redux";
import { reduires } from "./reduires";
import thunk from 'redux-thunk'

export  const  store = createStore(
  combineReducers({ list: reduires }),
  applyMiddleware(thunk)
);
