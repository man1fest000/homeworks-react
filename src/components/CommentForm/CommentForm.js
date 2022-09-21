import { useForm } from "react-hook-form";
import { commentsService } from "../../services";
import { useEffect } from "react";


const CommentForm = ({setComments}) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        //resolver: joiResolver(userValidator),
        mode: "all",
    });

    useEffect(()=>{
        setValue("name","Viktor");
        setValue("email","random@gmail.com");
        setValue("body","Hello World");
    })


    const submit = async (comment) => {
        const { data } = await commentsService.create(comment);
        console.log(data);
        setComments((comment) => [...comment, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"name"} {...register("name")} />

            <input type="text" placeholder={"email"} {...register("email")} />

            <input type="text" placeholder={"body"} {...register("body")} />

            <button>Save</button>
        </form>
    );
};

export { CommentForm };