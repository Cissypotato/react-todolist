
import {INPUT_VALUE_CHANGE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes.js'

export  const createInputValueChangeAction=(value)=>({
    type:INPUT_VALUE_CHANGE,
    value
})
export  const createAddTodoItemAction=()=>({
    type:ADD_TODO_ITEM
})

export  const createDeleteTodoItemAction=(index)=>({
    type:DELETE_TODO_ITEM,
    index
})