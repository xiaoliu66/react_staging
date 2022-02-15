import React,{Component} from 'react'
// import './Hello.css'
import hello from './index.module.css'

export default class Hello extends Component {
    render() {
        return (
            // <h2 className="title">Hello,React!</h2>
            <h2 className={hello.title}>Hello,React!</h2>
        )
    }
}