// 创建外壳组件app
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <List />
                    <Footer/>
                </div>
            </div>
        );
    }
}