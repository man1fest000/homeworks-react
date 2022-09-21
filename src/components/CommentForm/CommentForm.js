import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { commentsService } from "../../services";
import { commentValidator } from "../../validators";


const CommentForm = ({setComments}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: joiResolver(commentValidator),
        mode: "all",
    });




    const submit = async (comment) => {
        const { data } = await commentsService.create(comment);
        console.log(data);
        setComments((comment) => [...comment, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"name"} {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"email"} {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={"body"} {...register("body")} />
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export { CommentForm };