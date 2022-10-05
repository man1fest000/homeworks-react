import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <div>
            <h2>
                <NavLink to={'/users'} >Users</NavLink>
            </h2>
            <h2>
                <NavLink to={'/posts'}  >Posts</NavLink>
            </h2>
            <h2>
                <NavLink to={'/comments'} >Comments</NavLink>
            </h2>

        </div>
    );
};

export { Header };