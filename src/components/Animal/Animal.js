import css from './Animal.module.css'

const Animal = ({ item,index ,dispatch, deleteAnimal }) => {

    return (
        <div className={css.Animal}>
            <div>Name: {item}</div>
            <button onClick={() => dispatch({ type: deleteAnimal, payload: index })}>Delete</button>
        </div>
    );
};

export { Animal };