import React from 'react'

const Metrics = (props) => {
    let completedTodos = 0;
    props.todos.forEach(todo => {
        if (!todo.completed) {
            completedTodos++
        }
    });
  return (
    <div className="metrics">
            <div className="todos-counter">
                <p>{completedTodos} {completedTodos === 1 ? 'todo' : 'todos'} left</p>
            </div>

            <div className="todo-states">
                <span onClick={props.showAll}>All</span><span onClick={props.showActive}>Active</span><span onClick={props.showCompleted}>Completed</span>
            </div>

            <div className="clear-completed">
                <p onClick={props.clearCompleted}>Clear Completed</p>
            </div>
        </div>
  )
}

export default Metrics