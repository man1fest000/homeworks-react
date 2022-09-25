import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Albums, Comments, Post, Todos } from "./components";
import { MainLayout } from "./layouts";
import { HomePage } from "./pages";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout/>} >
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={"home"} element={<HomePage/>} />
                    <Route path={"todos"} element={<Todos />} />
                    <Route path={"albums"} element={<Albums />} />
                    <Route path={"comments"} element={<Comments />} >
                        <Route path={'post/:id'} element={<Post/>}/>
                    </Route>

                </Route>

            </Routes>

        </div>
    );
}

export default App;
