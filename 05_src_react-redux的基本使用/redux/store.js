// 引入createStore. 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from "redux"
// 引入为Count组件服务的redux
import countReducer from "./count_reducer"
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))