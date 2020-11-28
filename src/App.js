import './App.css';
import { React, useState } from "react";
import Todo from "./components/Todo"
// Import function actions
import {addTodo,deletList,editList} from './redux/Actions/ActionTodoList'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch,useSelector} from 'react-redux'


function App() {
  // input State
  const [input, setInput] = useState();
  // dispatch info state
  const dispatch = useDispatch();
  const Todos = useSelector((state)=>state.todos);
  console.log(Todos);
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
