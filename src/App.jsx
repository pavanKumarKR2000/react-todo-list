import './css/app.css';
import { IconContext } from "react-icons";
import React,{useState} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = React.createContext();


function App() {

  const [todos, setTodos] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [selectedEditTodo, setSelectedEditTodo] = useState(null);

  const handleAdd = () => {

    if (selectedEditTodo) {
      let newTodo = currentInput;
      let index = todos.findIndex(todo => todo.id === selectedEditTodo.id);
      let newTodos = [...todos];
      newTodos[index] = { id: selectedEditTodo.id, todo: newTodo };
      setTodos(newTodos);
      setSelectedEditTodo(null)
      setCurrentInput("");
    }
    else {
      setTodos([...todos, { id: uuidv4(), todo: currentInput }]);
      setCurrentInput("");
    }
    
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleEdit = (id) => {
    let selected_edit_todo = todos.find(todo => todo.id === id);
    setSelectedEditTodo(selected_edit_todo);
    setCurrentInput(selected_edit_todo.todo);
  }


  let values = {
    currentInput,
    setCurrentInput,
    handleAdd,
    handleDelete,
    handleEdit
  }

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
       <TodoContext.Provider value={values}>
         <TodoInput />
         <TodoList todos={todos} />
        </TodoContext.Provider>
      </IconContext.Provider>
    </>
  )
}

export default App;
