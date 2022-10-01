import "./App.css";

import { useReducer, useRef } from "react";

import { Animals } from "./components";
import { Inputs } from "./components";


function App() {

    const initialState = {
        cat: [],
        dog: [],
    };

    const reducer = (state, action) => {
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

    const [state, dispatch] = useReducer(reducer, initialState);

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

            <Inputs catRef={catRef} dogRef={dogRef} handleCat={handleCat} handleDog={handleDog} />

            <Animals state={state} dispatch={dispatch} />


        </div>
    );
}


export default App;
