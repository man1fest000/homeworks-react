import css from "./User.module.css";

const User = ({ user }) => {
    return (
        <div className={css.User}>
            <div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </div>

        </div>
    );
};

export { User };
