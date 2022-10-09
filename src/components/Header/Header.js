import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from './Header.module.css'


const Header = () => {
    const { currentUser } = useSelector((state) => state.userReducer);

    const {currentPost} = useSelector(state => state.postReducer);

    return (
        <div className={css.Header}>
            <div className={css.Links}>
                <h2>
                    <NavLink to={"users"}>Users</NavLink>
                </h2>
                <h2>
                    <NavLink to={"posts"}>Posts</NavLink>
                </h2>
                {currentUser && <h2> {currentUser.name} </h2>}
            </div>
            <div className={css.postTitle}>
                {currentPost && <div>{currentPost.title}</div>}
            </div>

        </div>
    );
};

export { Header };