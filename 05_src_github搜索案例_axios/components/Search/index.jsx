import axios from "axios";
import React, { Component } from "react";

export default class Search extends Component {
    search = () => {
        const { value } = this.keyWordElement;
        // 发送请求前通知app更新状态
        this.props.updateAppState({ isFirst: false });
        // 发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            (response) => {
                // 请求成功后通知App更新状态
                this.props.updateAppState({ isLoading: false, users: response.data.items });
            },
            (error) => {
                // 请求失败后通知App更新状态
                this.props.updateAppState({ isLoading: false, err: error.message });
            }
        );
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(c) => (this.keyWordElement = c)} type="text" placeholder="enter the name you search" />
                    &nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}
