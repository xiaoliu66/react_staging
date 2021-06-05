/**
 * 该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
 * preState 之前的状态
 * action 动作对象
 */

export default function countReducer(preState,action) {
    if (preState === undefined) preState = 0;
    const {type,data} = action

    // 根据类型决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }
}