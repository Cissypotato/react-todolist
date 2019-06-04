import React from 'react'



export default class TodoItem  extends React.Component{



    handleDelete=()=>{
        const {index ,deleteItem}= this.props
        deleteItem(index)
    }

    render(){
        // const content=this.props.content
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }
}