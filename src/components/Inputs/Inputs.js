import css from "./Inputs.module.css";

const Inputs = ({ catRef, dogRef, handleCat, handleDog }) => {
    return (
        <div className={css.Inputs}>

            <div className={css.InputBlock}>
                <input id={"cat"} type="text" placeholder={"cat"} ref={catRef} />
                <button onClick={handleCat}>Add Cat</button>
            </div>


            <div className={css.InputBlock}>
                <input type="text" placeholder={"dog"} ref={dogRef} />
                <button onClick={handleDog}>Add Dog</button>
            </div>
        </div>
    );
};

export { Inputs };