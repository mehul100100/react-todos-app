import { useState } from "react";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    // console.log(todo);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setClick(!click);
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  const [click, setClick] = useState(false);

  return (
    <div className="todo">
      <div className={click ? "todo-item active" : "todo-item"}>{text}</div>
      <div className="btn-items">
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
