import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/todos"}>TODO</Link></li>
                <li><Link to={"/albums"}>ALBUMS</Link></li>
                <li><Link to={"/comments"}>COMMENTS</Link></li>
            </ul>
        </div>
    );
};

export {Header}