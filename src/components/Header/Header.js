import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
    const { currentUser } = useSelector((state) => state.userReducer);

    const { currentPost } = useSelector((state) => state.postReducer);

    return (
        <div className={css.Header}>
            <div className={css.wrapper}>
                <div className={css.nav}>
                    <h2>
                        <NavLink to={"users"}>Users</NavLink>
                    </h2>
                    <h2>
                        <NavLink to={"posts"}>Posts</NavLink>
                    </h2>
                    <h2>
                        <NavLink to={'cars'}>Cars</NavLink>
                    </h2>
                </div>
                <div className={css.currentUser}>{currentUser && <h2> {currentUser.name} </h2>}</div>
            </div>
            <div className={css.postTitle}>{currentPost && <div>{currentPost.title}</div>}</div>
        </div>
    );
};

export { Header };
