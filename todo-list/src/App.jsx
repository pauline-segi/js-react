import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css'

// this creates the code
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },{
      text: "Meet a friend for lunch",
      isCompleted: false,
    },{
      text: "Build a really cool todo app",
      isCompleted: false,
    },
  ]);

// this reads the code
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // this code deletes a todo -- need to remember to call the function for the app at the bottom of the code under the 'return' section
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


// this udpates the code
  return (
  <div className="app">
    <h1 className="todo-list">My todo list</h1>
    {todos.map((todo, index) => ( //in this code, the todo is the actual wording of the todo, like 'eat a donut', and then the index is the position it's in, so this for loop will keep cycling through the todo's and putting them into their correct position in the list
      <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
    ))}
    <TodoForm addTodo={addTodo} />
  </div>
  );
}

export default App;
