
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import { CommentsPages, PostsPages, UsersPages } from "./pages";


function App() {


  return (
    <div className="App">

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPages/>}/>
                <Route path={'posts'} element={<PostsPages/>}/>
                <Route path={'comments'} element={<CommentsPages/>}/>
            </Route>
        </Routes>


    </div>
  );
}

export default App;
