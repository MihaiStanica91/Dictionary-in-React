import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CheckWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.props.list.includes(this.state.value) === true) {
            this.setState({ messsage: "Word exists in dictionary!" });
        } else {
            this.setState({ messsage: "Word doesn't exists in dictionary! You can add it!" });
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
                    <button className="btn-outline-primary" style={{marginLeft: "5px"}} type="submit">Check Word!</button>
                </form>
                <p style={{marginTop: "5px", textAlign: "center"}}>{this.state.messsage}</p>
            </div>
        );
    }
}

export default CheckWord;