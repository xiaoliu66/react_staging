import React, { Component } from "react";
import { InputNumber } from "antd";
import "antd/dist/antd.css";

export default class App extends Component {
    onChange = (value) => {
        console.log("changed", value);
    };

    render() {
        return (
            <div>
                <h2>输入框练习</h2>
                <InputNumber min={-11} max={10} defaultValue={3} onChange={this.onChange} />
            </div>
        );
    }
}
