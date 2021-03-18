import React from "react";

function Todo({ text, todos, todo, setTodos }) {
  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            //we are adding all the properties that item have by doing (...item) and add ","
            // to modify only one of them property. and set it opposite to the what item had
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button className="complete-btn" onClick={completedHandler}>
        <i className="fas fa-check"></i>
      </button>

      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
