import css from "./Album.module.css"

const Album = ({album}) => {
    return (
        <div className={css.Album}>
            <div>UserId - {album.userId}</div>
            <div>Id - {album.id}</div>
            <div>Title - {album.title}</div>
        </div>
    );
};

export { Album };