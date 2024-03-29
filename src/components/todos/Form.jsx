import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import uuid from 'react-uuid'
import shortid from 'shortid'

function Form() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

  return (
    <form onSubmit={(e) => {
        if (!title || !body) {
            alert("필수 값이 누락되었습니다.")
            return false
        }

        e.preventDefault()

        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: shortid.generate(),
                title: title,
                body: body,
                isDone: false,
            },
        })

        setTitle("")
        setBody("")
    }}>
        <div>
            <label>제목</label>
            <input 
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            />
            <label>내용</label>
            <input
            type="text"
            name="title"
            value={body}
            onChange={(e) => {
                setBody(e.target.value)
            }}
            />
        </div>
        <button>추가하기</button>
    </form>
  )
}

export default Form