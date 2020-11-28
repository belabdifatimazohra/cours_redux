import './App.css';
import { React, useState, useDispatch } from "react";
import Todo from "./components/Todo"
// Import function actions
import {addTodo,deletList,editList} from './redux/Actions/ActionTodoList'
import { v4 as uuidv4 } from 'uuid';


function App() {
  // input State
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  return (
    <div >
      <div className="header">
        <h2>My To Do List</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Task to add..." />
        <span className="addBtn" onClick = {()=>
        dispatch(addTodo({id:uuidv4(), task: input, check: false}))
        }>Add</span>
      </div>
    </div>
  );
}

export default App;
