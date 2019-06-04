
import React from 'react'
import TodoItem from './TodoItem'
import './index.css'

export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }

    handleInputChange=(e)=>{
        const inputValue=e.target.value
        this.setState({
            inputValue
        })
    }

    submit=()=>{
        const inputValue=this.state.inputValue
        // const list=this.state.list
        // list.push(inputValue)
        // this.setState({
        //     list
        // })
        this.setState({
            list:[...this.state.list,inputValue],
            inputValue:''
        })

    }

    handleDdeleteItem=(index)=>{
        const list=this.state.list
        list.splice(index,1)
        this.setState({
            list
        })

    }
    getTodoItem=()=>{
       return this.state.list.map((item,index)=>{
        return<TodoItem content={item} index={index} deleteItem={this.handleDdeleteItem}/>
    })
    }

    render(){
        return(
            <div className="wrapper">
                <div>
                    <label>请输入</label>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.submit}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                  
                </ul>
            </div>
        )
    }
}