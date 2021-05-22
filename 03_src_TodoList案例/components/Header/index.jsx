import React, { Component } from "react";
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import "./index.css";

export default class Header extends Component {
    // 对接收的props进行：；类型、必要性的限制
    // static propTypes = {
    //     todos: PropTypes.array.isRequired,
    //     updateTodo: PropTypes.func.isRequired
    // }

    handleKeyUp = (event) => {
        // 解构赋值获取keycode target
        const {keyCode,target} = event
        // 判断是否是回车按键
        if (event.keyCode !== 13) {
            return
        }
        // 判断输入是否为空
        if(target.value.trim() === '') {
            alert("待办事项名称不能为空！")
            return
        }
        // 准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // console.log(event.target.value,event.keyCode)
        // 将todoObj传递给App
        this.props.addTodo(todoObj)
        // 清空输入
        target.value = ''
    }
    
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}
