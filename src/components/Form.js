const Form = (props) => {
  const inputChangeHandler = (e) => {
    // console.log(e.target.value);
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    // console.log(e);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <div className="first">
        <input
          value={props.inputText}
          onChange={inputChangeHandler}
          type="text"
          className="todo-input"
          placeholder="Enter your todo"
        />

        
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Incomplete</option>
          </select>
        
        <button
          onClick={submitTodoHandler}
          type="submit"
          className="todo-btn"
        >
          <div>Submit</div>
          {/* <i className="fa-solid fa-square-plus"></i> */}
        </button>
      </div>
    </form>
  );
};

export default Form;
