import React, { Component } from "react";
import List from "./components/List";
import "./App.css";
import Search from "./components/Search";

export default class App extends Component {
    // 初始化状态
    state = { users: [] };

    saveUsers = (users) => {
        this.setState({ users });
    };

    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers}/>
                <List users={users}/>
            </div>
        );
    }
}
