// import uuid from "react-uuid";
import shortid from "shortid"

// 초기값
const initialState = [
    {
        id: shortid.generate(),
        title: "리엑트 공부하기 1",
        body: "강의 완주!",
        isDone: false,
    },
    {
        id: shortid.generate(),
        title: "리엑트 공부하기 2",
        body: "강의 완주!",
        isDone: true,
    },
]

// action value
// const ADD_TODO = "modules/ADD_TODO"

// action creator
// export const addTodo = (payload) => {
//     return { type: ADD_TODO, payload }
//     };


// 리듀서 : 역할을 수행하는 함수
// input : state, action
// action에 있는 type에 따라 작업을 수행함
const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
            
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload)

        case "SWITCH_TODO":
            return state.map((todo) => {
                if(todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

export default todos;