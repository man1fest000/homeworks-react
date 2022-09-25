
const Album = ({album}) => {
    return (
        <div>
            <div>UserId - {album.userId}</div>
            <div>Id - {album.id}</div>
            <div>Title - {album.title}</div>
        </div>
    );
};

export { Album };