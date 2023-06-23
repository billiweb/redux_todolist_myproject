import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';


function App() {



  return (
    <>
    <div>
      <h2>My Todo List</h2>
    </div>

    <div>
      <form>
        제목 : <input type="text" placeholder='제목' />
        내용 : <input type="text" placeholder='내용' />
        <button>저장하기</button>
      </form>
    </div>

    <div>
      <h2>Working...🔥</h2>

      <h2>Done...!😄</h2>
    </div>
    </>
  );
}

export default App;
