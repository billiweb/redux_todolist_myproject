
const initialState = {
    todolist: [
    {
        id: 1,
        title: "리엑트 공부하기",
        content: "강의 완주!",
        isDone: false,
    },
    {
        id: 2,
        title: "리엑트 공부하기",
        content: "강의 완주!",
        isDone: false,
    },
]}

const todolist = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default todolist;