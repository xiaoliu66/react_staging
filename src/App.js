// 创建外壳组件app
import React,{Component} from 'react';
import Hello from "./components/Hello"
// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <Hello/>
    )
  }
}