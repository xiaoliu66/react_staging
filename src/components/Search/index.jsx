import axios from "axios";
import React, { Component } from "react";

export default class Search extends Component {
    search = () => {
        const {value} = this.keyWordElement;
        // 发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                this.props.saveUsers(response.data.items);
            },
            error => { console.log('failed')}
        )
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
