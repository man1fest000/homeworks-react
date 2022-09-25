
const Todo = ({todo}) => {
    return (
        <div>
            <div>UserId - {todo.userId}</div>
            <div>Id - {todo.id}</div>
            <div>Title - {todo.title}</div>
            <div>Completed - {todo.completed.toString()}</div>
        </div>
    );
};

export { Todo };