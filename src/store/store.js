import  {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Redures from "./redures.js"
let store=createStore(combineReducers({list:Redures}),applyMiddleware(thunk));
export default  store;