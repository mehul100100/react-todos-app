const Form = (props) => {

    const inputChangeHandler = (e) => {
        // console.log(e.target.value);
        props.setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        
        props.setTodos([
            ...props.todos, {
                text: props.inputText, completed: false, id: Math.random() * 1000,
            }
        ])
        // console.log(e);
        props.setInputText("");
    }

    const statusHandler = (e) => {
      // console.log(e.target.value);
      props.setStatus(e.target.value);
    }


  return (
    <form>
      <input value = {props.inputText} onChange={inputChangeHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
      <i className="fa-solid fa-square-plus"></i>
      
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
