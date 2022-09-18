import "./App.css";
import Users from "./components/Users/Users";
import SpaceXShips from "./components/SpaceXShips/SpaceXShips";

function App() {
    return (
        <div className="App">
            <Users />
            <hr/>
            <SpaceXShips />
        </div>
    );
}

export default App;
