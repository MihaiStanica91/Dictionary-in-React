import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function WordInput({list, setAllWords}) {
    const [word, addWord] = useState("");
    const [message, setMessage] = useState("");

    const addNewWord = (e) => {
        if(list.includes(word) === false && word !== "") {
            setAllWords(list => [...list, word]);
            setMessage("Word added successfully!");
            setTimeout(() => {setMessage("Please type a new word!")}, 2000);
        } else if(list.includes(word) === true && word !== "") {
            setMessage("Word already exists in dictionary!");
            setTimeout(() => {setMessage("Please type a new word!")}, 2000);
        } else {
            setMessage("Please add a valid word!");
        }
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={addNewWord}>
                <label>
                Word:
                    <input style={{marginLeft: "5px"}} type="text" value={word} onChange={(e) => {addWord(e.target.value)}} />
                </label>
                <button className="btn-outline-primary" style={{marginLeft: "5px"}} type="submit">Add Word!</button>
            </form>
            <p style={{marginTop: "5px", textAlign: "center"}}>{message}</p>
        </div>
    );
}
export default WordInput;