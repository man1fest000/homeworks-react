import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>


            <div className={css.menu}>
                <h2><NavLink to={"/home"}>HOME</NavLink></h2>
                <h2><NavLink to={"/todos"}>TODO</NavLink></h2>
                <h2><NavLink to={"/albums"}>ALBUMS</NavLink></h2>
                <h2><NavLink to={"/comments"}>COMMENTS</NavLink></h2>
            </div>

        </div>
    );
};

export { Header };