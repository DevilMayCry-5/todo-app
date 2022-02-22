import React from "react";
import Form from "./Form";
import TodosContainer from "./TodosContainer";
import Metrics from "./Metrics";

const Header = (props) => {
  return (
    <header>
      <div className="content">
        <div className="header">
          <h1>Todo</h1>
          <box-icon name="sun"></box-icon>
        </div>
        {/* all components should be added below within content */}

        <Form onAdd={props.onAdd}/>

        <TodosContainer
          defaultTodos={props.defaultTodos}
          onDelete={props.onDelete}
          onDouble={props.onDouble}
        />
        <Metrics todos={props.defaultTodos} clearCompleted={props.clearCompleted}
        showCompleted={props.showCompleted} showAll={props.showAll} showActive={props.showActive}/>
      </div>
    </header>
  );
};

export default Header;
