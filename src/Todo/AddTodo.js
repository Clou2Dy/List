import React, { useState } from "react";
import PropTypes from "prop-types";
import { clear } from "@testing-library/user-event/dist/clear";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodos({ onChreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onChreate(input.value());
      input.clear();
      // setValue('')
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input} />
      <button type="submit">Add Todo!</button>
    </form>
  );
}

AddTodos.propTypes = {
  onChreate: PropTypes.func.isRequired,
};

export default AddTodos;
