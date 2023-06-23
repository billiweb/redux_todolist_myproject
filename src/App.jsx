import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const initialState = useSelector((state) => {
    return state.todolist.todolist;
  });

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')

  const StInputBox = styled.div`
    background-color: orange;
    padding: 10px;
  `;

  const StContainer = styled.div`
    display: flex;
  `;

  const StListBox = styled.div`
    width: 300px;
    border: 1px solid black;
    margin: 10px;
    padding: 20px;
  `;

  return (
    <>
      <div>
        <h2>My Todo List</h2>
      </div>

      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodos = {
              id: uuid(),
              title,
              content,
              isDone: false,
            };
            setTodos([...todos, newTodos]);
          }}
        >

          제목 : <input type="text" placeholder="제목" value={title} onChange={(event)=>{
              setTitle(event.target.value)
            }} ></input>

          내용 : <input type="text" placeholder="내용" value={content} onChange={(event)=>{
            setContent(event.target.value)
          }}></input>
          <button>저장하기</button>
        </form>
      </div>

      <div>
        <h2>Working...🔥</h2>
        <StContainer>
          {todos.map(function (todo) {
            return (
              <StListBox key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <p>{todo.isDone.toString()}</p>
              </StListBox>
            );
          })}
        </StContainer>
      </div>

      <div>
        <h2>Done...!😄</h2>
      </div>
    </>
  );
}

export default App;
