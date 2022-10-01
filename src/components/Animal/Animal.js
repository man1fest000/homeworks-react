const Animal = ({ item,index ,dispatch, deleteAnimal }) => {

    return (
        <div>
            <div>Name: {item}</div>
            <button onClick={() => dispatch({ type: deleteAnimal, payload: index })}>Delete</button>
        </div>
    );
};

export { Animal };