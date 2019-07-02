
import {INPUT_VALUE_CHANGE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes.js'

const defaultState={
    inputValue:'',
    list:[]
}


export default function(state=defaultState,action){
    if(action.type===INPUT_VALUE_CHANGE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADD_TODO_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=""
        return newState
    }
    if(action.type===DELETE_TODO_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}