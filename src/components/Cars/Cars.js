import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { Car } from "../Car/Car";
import { carActions } from "../../redux";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars,error,loading} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carActions.getAll())
    },[]);



    return (
        <div>
            {loading && <div> Loading... </div>}
            {error && <div> Error </div>}
            {
                cars.map(car => <Car key={car.id} car={car} />)
            }
        </div>
    );
};

export { Cars };