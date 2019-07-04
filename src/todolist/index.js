
import React from 'react'
import store from './../store/index.js'
import 'antd/dist/antd.css'
import axios from 'axios'
import {createInputValueChangeAction,createAddTodoItemAction,createDeleteTodoItemAction,
initListAction} from './../store/actionGenerator.js'
import TodolistUI from './todolistUI.js'
export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(this.handleStateChange)
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d1e034d0d0695685019b862/todolist/list').then((res)=>{
            console.log(res.data.list)
            let action=initListAction(res.data.list)
            console.log(action)
            store.dispatch(action)
        })
    }
    handleStateChange=()=>{
        this.setState(store.getState())
    }
    handleChange=(e)=>{
        let action=createInputValueChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleSubmit=()=>{
        const action=createAddTodoItemAction()
        store.dispatch(action)
    }
    handleClickItem=(index)=>{
        const action=createDeleteTodoItemAction(index)
        store.dispatch(action)
    }
 render(){
     return <TodolistUI
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        list={this.state.list}
        handleClickItem={(index)=>this.handleClickItem(index)}
     />
 }
}