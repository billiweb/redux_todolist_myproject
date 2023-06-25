// 중앙 데이터 관리소 (store)를 설정하는 부분
import {createStore} from "redux"
import { combineReducers } from "redux"
import todos from "../modules/todos"

// store에는 Reducer(제어)와 state(상태) 둘 다 있다
const rootReducer = combineReducers({
    todos: todos,
})

const store = createStore(rootReducer)

export default store;