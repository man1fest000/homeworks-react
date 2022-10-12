import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { carActions } from "../../redux";
import { useEffect } from "react";

const CarForm = () => {
    const dispatch = useDispatch();

        const {handleSubmit, register, reset} = useForm();

        const onSubmit = (data) => {
            dispatch(carActions.create(data));
            reset();
        }



    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder={"modal"} {...register("modal")} />
            <input type="text" placeholder={"price"} {...register("price", {valueAsNumber: true})} />
            <input type="text" placeholder={"year"} {...register("year",{valueAsNumber:true})} />
            <button>Save</button>
        </form>
    );
};

export { CarForm };