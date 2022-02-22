// import React from "react";
import { useState, React} from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 0) {
      alert("Cannot enter an empty todo. Sucker");
      return;
    }
    props.onAdd(inputValue);
    setInputValue('')
  }

  return (
    <form
      action=""
      onSubmit={onFormSubmit}
    >
      <input
        type="text"
        placeholder="Create new todo"
        value={inputValue}
        // value=''
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
    </form>
  );
};

export default Form;
