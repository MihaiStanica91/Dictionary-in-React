import React from "react";
import WordInput from "./WordInput";
import CheckWord from "./CheckWord";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    state = {
        allWords: []
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center", paddingBottom: "20px"}}>Dictionary</h1>
                <WordInput list={this.state.allWords}/>
                <CheckWord list={this.state.allWords}/>
            </div>
        );
    }
}

export default App;