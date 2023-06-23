import uuid from "react-uuid";

// 초기값
const initialState = {
    todolist: [
    {
        id: uuid(),
        title: "리엑트 공부하기",
        content: "강의 완주!",
        isDone: false,
    },
    {
        id: uuid(),
        title: "리엑트 공부하기",
        content: "강의 완주!",
        isDone: true,
    },
]}

// action value
const ADD_TODO = "modules/ADD_TODO"

// action creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
    };




const todolist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
               todolist: [...state.todolist, action.payload]
            }
        default:
            return state;
    }
}

export default todolist;