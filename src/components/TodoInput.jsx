import  { useState,useContext } from "react";
import { GrLinkNext } from "react-icons/gr";
import { TodoContext } from "../App";



const TodoInput = () => {
  
  const { currentInput ,setCurrentInput, handleAdd } = useContext(TodoContext);
  

  return (
      <div className="todo-input-container">
          <form>
              <input
                  className="todo-input" type="text"
                  placeholder="Enter Todo"
                  value={currentInput}
                  onChange={(e) =>setCurrentInput(e.target.value) } />
              <button
                  className="btn btn-add"
                  disabled={!currentInput}
                  onClick={handleAdd}>
                 <GrLinkNext />
              </button>
          </form>
     </div>
  )
}

export default TodoInput;