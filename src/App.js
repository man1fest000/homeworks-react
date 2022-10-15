import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { UsersPage } from "./pages";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import {Cars} from "./components/Cars/Cars";




function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route index element={<Navigate to={'users'} />}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
