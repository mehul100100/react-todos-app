import Todo from "./Todo";
const TodoList = (props) => {

    // console.log(props.todos);
    return (
        
            <div>
            {props.filteredTodos.map((todo) => (
                <Todo todo={todo} todos={props.todos} setTodos={props.setTodos} text = {todo.text} key={todo.id} />
            ))}</div>
        
    );
}

export default TodoList;