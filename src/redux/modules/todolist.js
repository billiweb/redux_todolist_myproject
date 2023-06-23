import {uuid} from "react"

const initialState = {
    todolist: {
        id: uuid,
        title: "리엑트 공부하기",
        content: "강의 완주!",
        isDone: false,
    },
}

const todolist = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default todolist;