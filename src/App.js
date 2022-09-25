import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Albums, Comments, Post, Todos } from "./components";


function App() {
    return (
        <div className="App">
            <ul>
                <li><Link to={"/todos"}>TOD</Link></li>
                <li><Link to={"/albums"}>ALBUMS</Link></li>
                <li><Link to={"/comments"}>COMMENTS</Link></li>
            </ul>


            <hr />
            <Routes>
                <Route path={"todos"} element={<Todos />} />
                <Route path={"albums"} element={<Albums />} />
                <Route path={"comments"} element={<Comments />} />
                <Route path={'/comments/:id/post'} element={<Post/>}/>
            </Routes>
            <hr />

        </div>
    );
}

export default App;
