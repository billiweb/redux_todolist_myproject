// rafce
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const todos = useSelector((state) => state.todos);
    const todo = todos.filter((todo) => todo.id === id)[0];

    console.log(id)
    console.log(todos)
    console.log(todo)
    
  return ( <div>
        {todo.id}<br />
        {todo.title}<br />
        {todo.body}<br />
        {todo.isDone.toString()}<br />
        <button onClick={() => navigate("/")}>이전 화면으로</button>
    </div>
    )
}

export default Detail