import { TodoContext } from "../App";
import { useContext, useState } from 'react';
import {GrEdit,GrTrash,GrCheckmark} from "react-icons/gr";

const Todo = ({todo}) => {

    const { handleDelete, handleEdit } = useContext(TodoContext);
    
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        isCompleted ? setIsCompleted(false) : setIsCompleted(true);
    }
      
  return (
      <div className='todo'>
          <div className='todo-text-container'>
              <p className={`${isCompleted?"strike":""}`}>{todo.todo}</p>    
          </div>
          <div className='todo-edit-delete-complete-btn-container'>
              <button
                  className='btn btn-complete'
                  onClick={handleComplete}>
                  <GrCheckmark/>
              </button>
              <button
                  className="btn btn-edit"
                  onClick={()=>handleEdit(todo.id)}>
                  <GrEdit />
              </button>
              <button
                  className='btn btn-delete'
                  onClick={()=>handleDelete(todo.id)}>
                  <GrTrash />
              </button>
          </div>    
      </div>
  )
}

export default Todo;