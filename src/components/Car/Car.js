import { useDispatch } from "react-redux";
import { carActions } from "../../redux";
import { useEffect } from "react";

const Car = ({car}) => {

    const dispatch = useDispatch();


//delete car by id
    const deleteCar = () => {
        dispatch(carActions.deleteById(car.id))

    }




    return (
        <div>
            <div>id: {car.id}</div>
            <div>model: {car.model}</div>
            <div>price: {car.price}</div>
            <div>year: {car.year}</div>
            <button onClick={()=> deleteCar()} >delete</button>
            <button>update</button>
        </div>
    );
};

export { Car };