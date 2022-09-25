import { useEffect, useState } from "react";
import { getTodos } from "../../services/todos.service";
import { Todo } from "../Todo/Todo";


const Todos = () => {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos.data));
    }, []);


    return (
        <div>
            {
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
            }
        </div>
    );
};

export { Todos };