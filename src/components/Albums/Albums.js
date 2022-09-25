import { useEffect, useState } from "react";

import { Album } from "../Album/Album";
import { getAlbums } from "../../services/albums.service";


const Albums = () => {
    const [albums, setAlbums] = useState([]);

useEffect(() => {
    getAlbums().then((res) => {
        setAlbums(res.data);
    })
}, []);



    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}  />)
            }
        </div>
    );
};

export { Albums };