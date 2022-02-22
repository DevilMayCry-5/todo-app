import React from "react";
import Todo from "./Todo";

const TodosContainer = (props) => {
  return (
    <div className="todosContainer">
      {props.defaultTodos.length > 0
        ? props.defaultTodos.map((todo) => (
            <Todo
              text={todo.text}
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
              onDelete={props.onDelete}
              onDouble={props.onDouble}
            />
          ))
        : <div className="no-todos">All clear: No task left</div> }
    </div>
  );
};

export default TodosContainer;
