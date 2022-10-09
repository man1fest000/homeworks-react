import { useSelector } from "react-redux";

const Header = () => {
    const { currentUser } = useSelector(state => state.userReducer);
    return (
        <div>
            {
                currentUser && <div> {currentUser.name} </div>
            }
        </div>
    );
};

export { Header };