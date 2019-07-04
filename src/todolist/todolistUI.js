import React from 'react'
import {Input,Button,List} from 'antd'



const TodolistUI=(props)=>{
    return (
            <div>
                <Input placeholder="inputIfo" style={{width:300}} value={props.inputValue} 
                onChange={props.handleChange}/>
                <Button type="primary" onClick={props.handleSubmit}>提交</Button>
                <List
                   bordered
                   dataSource={props.list}
                   renderItem={(item,index) => (
                       <List.Item onClick={(index)=>props.handleClickItem(index)}>
                        {item}
                       </List.Item>
         )}
         style={{width:300}}
       />
            </div>
    )
}

export default TodolistUI