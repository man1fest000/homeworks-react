import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { UsersPage } from "./pages";
import { PostsPages } from "./pages/PostsPages/PostsPages";
import { CarsPages } from "./pages/CarsPages/CarsPages";



function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route index element={<Navigate to={'users'} />}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPages/>}/>
                    <Route path={'cars'} element={<CarsPages/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
