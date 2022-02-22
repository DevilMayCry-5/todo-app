import React from "react";

const Todo = (props) => {
  return (
    <div className="todo" onDoubleClick={() => props.onDouble(props.id)}>
      <div>
        {props.completed ? (
          <>
            <box-icon
              name="check-circle"
              type="solid"
              color="gray"
              onClick={() => props.onDouble(props.id)}
            ></box-icon>
            <p className="checked">{props.text}</p>
          </>
        ) : (
          <>
            <box-icon
              name="circle"
              color="gray"
              onClick={() => props.onDouble(props.id)}
            ></box-icon>
            <p>{props.text}</p>
          </>
        )}
      </div>

      <box-icon
        name="x"
        color="gray"
        onClick={() => props.onDelete(props.id)}
      ></box-icon>
    </div>
  );
};

Todo.defaultProps = {
  text: "This is the default todo text item whatever",
  completed: false,
};

export default Todo;
