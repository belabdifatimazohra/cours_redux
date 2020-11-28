import React from "react";
import { useState } from "react";

function Todo() {

  return (
    <div>
      <div className="toDoList">
        <div className="todolist-area">
          <input
            placeholder=""
            // value={task}
            className="todo-input"
            // onChange={}
          />
        </div>

        <button
          className="delete-btn"
        //   onClick={  }
        >
          Delete
        </button>
        <button
          className="delete-btn"
        //   onClick={  }
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Todo;