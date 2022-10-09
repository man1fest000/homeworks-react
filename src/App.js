import "./App.css";
import { Header, Posts, Users } from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <div className={'wrapper-users-post'}>
                <Users />
                <Posts />
            </div>
        </div>
    );
}

export default App;
