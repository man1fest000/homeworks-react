import "./App.css";
import { Comments, Users } from "./components";

function App() {
    return (
        <div className="App">
            <hr/>
            <Users />
            <hr/>
            <Comments />
        </div>
    );
}

export default App;
