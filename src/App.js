import Header from "./components/Header";
import { useState } from "react";
function App() {
  const defaultTodos = [
    {
      id: 1,
      completed: true,
      text: "This is test todo item number one",
    },
    {
      id: 2,
      completed: true,
      text: "This is test todo item number two",
    },
    {
      id: 3,
      completed: true,
      text: "This is test todo item number two",
    },
  ];

  const [todos, setTodos] = useState(defaultTodos);
  const [secondTodos, setSecondTodos] = useState(todos);


  // delete a todo/task
  const deleteTodo = (id) => {
    setSecondTodos(
      secondTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  // add a new todo/task item
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, completed: false, text: text },
    ]);

    setSecondTodos([
      ...secondTodos,
      { id: secondTodos.length + 1, completed: false, text: text },
    ]);
  };

  // mark a todo/task as complete or not
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    setSecondTodos(
      secondTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  // clear all completed tasks/todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setSecondTodos(secondTodos.filter((todo) => !todo.completed));
  };


  // show only completed tasks/todos
  const showCompleted = () => {
    setSecondTodos(todos.filter((todo) => todo.completed));
  };

  // show all active/incomplete tasks/todos
  const showActive = () => {
    setSecondTodos(todos.filter((todo) => !todo.completed));
  };

  // show all tasks/todos
  const showAll = () => {
    console.log(todos);
    setSecondTodos(todos.map((todo) => todo));
  };

  return (
    <div className="App">
      <Header
        defaultTodos={secondTodos}
        onDelete={deleteTodo}
        onDouble={completeTodo}
        onAdd={addTodo}
        clearCompleted={clearCompleted}
        showCompleted={showCompleted}
        showActive={showActive}
        showAll={showAll}
      />
    </div>
  );
}

export default App;
