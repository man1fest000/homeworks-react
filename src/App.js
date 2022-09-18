import "./App.css";
import { useState } from "react";

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import { getPostsUserAxios } from "./services/posts.user.axios.service";




function App() {

    const [posts, setPosts] = useState(null);

    const getPostsByUserId = (id) => {
        getPostsUserAxios(id).then((posts) => setPosts(posts));
        console.log(id);
    }

    console.log(posts);

    return (
        <div className="App">
            <hr/>
            {
                posts && <Posts posts={posts} />
            }
            <hr/>
            <Users getPostsByUserId ={getPostsByUserId}  />
        </div>
    );
}

export default App;
