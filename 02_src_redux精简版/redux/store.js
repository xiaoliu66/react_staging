// 引入createStore. 专门用于创建redux中最为核心的store对象
import {createStore} from "redux"
// 引入为Count组件服务的redux
import countReducer from "./count_reducer"

export default createStore(countReducer)