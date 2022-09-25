import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Albums, Comments, Header, Post, Todos } from "./components";


function App() {
    return (
        <div className="App">

            <Header/>

            <hr />
            <Routes>
                <Route path={"todos"} element={<Todos />} />
                <Route path={"albums"} element={<Albums />} />
                <Route path={"comments"} element={<Comments />} >
                    <Route path={'post/:id'} element={<Post/>}/>
                </Route>

            </Routes>
            <hr />

        </div>
    );
}

export default App;
