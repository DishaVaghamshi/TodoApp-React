import React from "react";

function Form({ inputText, setInputText, todos, setTodos, status, setStatus }) {
  const setInputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={setInputTextHandler}
        />
        <button type="submit" className="todo-button" onClick={submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default Form;
