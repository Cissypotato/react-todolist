import { createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer.js'

let store = createStore(reducer)


export default store