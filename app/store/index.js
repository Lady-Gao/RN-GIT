import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from "../redux/reducers";
import logger from 'redux-logger'
let store ;
console.log(__DEV__)
if (__DEV__) {
    store = createStore(reducers, applyMiddleware(thunk, logger))
}else{
    store =createStore(reducers, applyMiddleware(thunk));

}



export default store 