// 중앙 데이터 관리소 (store)를 설정하는 부분
import {createStore} from "redux"
import { combineReducers } from "redux"
import todolist from "../modules/todolist"

// store에는 REducer(제어)와 state(상태) 둘 다 있다

const rootReducer = combineReducers({
    todolist,
})
const store = createStore(rootReducer)

export default store;