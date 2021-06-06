/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constant'
import store from './store'



export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action ，返回的值为函数
export const createIncrementAsyncAction = (data,time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        }, time);
    }
}