import { useForm } from "react-hook-form";
import { useEffect } from "react";


import { usersService } from "../../services";

const UserForm = ({ setUsers }) => {
    const {
        register,
        handleSubmit,
        reset,

        setValue,
    } = useForm({
        mode: "all",
    });

    useEffect(() => {
        setValue("name", "John");
        setValue("email", "random@gmail.com");
        setValue("phone", "+380");
    });


    const submit = async (user) => {
        const { data } = await usersService.create(user);
        console.log(data);
        setUsers((users) => [...users, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"name"} {...register("name")} />

            <input type="text" placeholder={"email"} {...register("email")} />

            <input type="text" placeholder={"phone"} {...register("phone")} />

            <button >Save</button>
        </form>
    );
};

export { UserForm };
