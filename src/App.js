import React, {useState} from "react";
import WordInput from "./WordInput";
import CheckWord from "./CheckWord";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [allWords, setAllWords] = useState("");
    return (
        <div>
            <h1 style={{textAlign: "center", paddingBottom: "20px"}}>Dictionary</h1>
            <WordInput list={allWords} setAllWords={setAllWords}/>
            <CheckWord list={allWords}/>
        </div>
    );
}

export default App;