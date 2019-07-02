
import React from 'react'
import store from './../store/index.js'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import {createInputValueChangeAction,createAddTodoItemAction,createDeleteTodoItemAction} from './../store/actionGenerator.js'

export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(this.handleStateChange)
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
     return (
         <div>
             <Input placeholder="inputIfo" style={{width:300}} value={this.state.inputValue} 
             onChange={this.handleChange}/>
             <Button type="primary" onClick={this.handleSubmit}>提交</Button>
             <List
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>this.handleClickItem(index)}>
                     {item}
                    </List.Item>
      )}
      style={{width:300}}
    />
         </div>
     )
 }
}