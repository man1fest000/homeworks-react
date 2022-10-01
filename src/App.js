import "./App.css";

import { useReducer, useRef } from "react";
import { Animal } from "./components";


function App() {

    const initialState = {
        cat: [],
        dog: [],
    };

    const formReduser = (state, action) => {
        switch (action.type) {
            case "ADD_CAT":
                return {
                    ...state,
                    cat: [...state.cat, action.payload],
                };
            case "ADD_DOG":
                return {
                    ...state,
                    dog: [...state.dog, action.payload],
                };
            case "DELETE_CAT":
                return {
                    ...state,
                    cat: state.cat.filter((item, index) => index !== action.payload),

                };
            case "DELETE_DOG":
                return {
                    ...state,
                    dog: state.dog.filter((item, index) => index !== action.payload),
                };
            default:
                return state;
        }

    };

    const [state, dispatch] = useReducer(formReduser, initialState);

    const catRef = useRef();
    const dogRef = useRef();

    const handleCat = () => {
        dispatch({ type: "ADD_CAT", payload: catRef.current.value });
        catRef.current.value = "";

    };

    const handleDog = () => {
        dispatch({ type: "ADD_DOG", payload: dogRef.current.value });
        dogRef.current.value = "";
    };


    return (

        <div className="App">

            <input type="text" placeholder={"cat"} name={"cat"} ref={catRef} />
            <button onClick={handleCat}>Add Cat</button>

            <input type="text" placeholder={"dog"} name={"dog"} ref={dogRef} />
            <button onClick={handleDog}>Add Dog</button>

            <div>
                {
                    state.cat.map((item, index) => <Animal key={index} item={item} index={index} dispatch={dispatch} deleteAnimal={"DELETE_CAT"} />)
                }
            </div>

            <div>
                {
                    state.dog.map((item, index) => <Animal key={index} item={item} index={index} dispatch={dispatch} deleteAnimal={'DELETE_DOG'}/>)
                }
            </div>


        </div>
    );
}


export default App;
