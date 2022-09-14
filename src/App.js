
import './App.css';
import {useEffect, useState} from "react";
import RickAndMortyComponent from "./components/rickAndMortyComponent";
import {getCharacters} from "./services/rickAndMortyService";
import SimpsonsComponent from "./components/simpsonsComponent";

function App() {
  let [characters, setCharacters] = useState([])

  useEffect(()=>{
      getCharacters().then(value => setCharacters(value.results.splice(0, 6)))
  },[])

  return (
    <div className="App">
        <div className={'cards'}>{
            characters.map(value => <RickAndMortyComponent key={value.id} item={value}/>)
        }</div>
        <SimpsonsComponent name={"Homer"} pic={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'} />
        <SimpsonsComponent name={'Marge'} pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        <SimpsonsComponent name={'Bart'} pic={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
        <SimpsonsComponent name={'Lisa'} pic={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}/>
        <SimpsonsComponent name={'Maggie'} pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
    </div>
  );
}

export default App;
