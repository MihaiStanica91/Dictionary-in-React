import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function CheckWord({list}) {
    const [word, searchWord] = useState("");
    const [message, setMessage] = useState("");

    const searchNewWord = (e) => {
        if(list.includes(word) === true) {
            setMessage("Word exists in dictionary!");
            setTimeout(() => {setMessage("Check a new word!")}, 2000);
        } else {
            setMessage("Word doesn't exists in dictionary! You can add it!");
        }
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={searchNewWord}>
                <label>
                    Word:
                <input style={{marginLeft: "5px"}} type="text" value={word} onChange={(e) => {searchWord(e.target.value)}} />
                </label>
                <button className="btn-outline-primary" style={{marginLeft: "5px"}} type="submit">Check Word!</button>
            </form>
            <p style={{marginTop: "5px", textAlign: "center"}}>{message}</p>
        </div>
    );
}

export default CheckWord;