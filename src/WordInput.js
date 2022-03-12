import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class WordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          messsage: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value === "") {
            this.setState({ messsage: "Please add a word to dictionary!" });
        } else {
            this.props.list.push(this.state.value);
            this.setState({ messsage: "Word added successfully!" });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Word:
                      <input style={{marginLeft: "5px"}} type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <button className="btn-outline-primary" style={{marginLeft: "5px"}} type="submit">Add Word!</button>
                </form>
                <p style={{marginTop: "5px", textAlign: "center"}}>{this.state.messsage}</p>
            </div>
        );
    }
}
export default WordInput;