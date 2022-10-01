import css from "./Animals.module.css";
import { Animal } from "../Animal/Animal";

const Animals = ({ state, dispatch }) => {
    return (
        <div className={css.Animals}>
            <div>
                {
                    state.cat.map((item, index) => <Animal key={index} item={item} index={index} dispatch={dispatch} deleteAnimal={"DELETE_CAT"} />)
                }
            </div>

            <div>
                {
                    state.dog.map((item, index) => <Animal key={index} item={item} index={index} dispatch={dispatch} deleteAnimal={"DELETE_DOG"} />)
                }
            </div>
        </div>
    );
};

export { Animals };