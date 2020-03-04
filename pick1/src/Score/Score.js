import React from "react";
import "./Score.css";


class Score extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        score: 0

    };

    handleIncrement = () => {
        console.log("click")
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.score + 1 });
    };

    render() {
        return (
            <div className="card-body">
                <p className="card-text">Click Count: {this.state.score}</p>
                <button className="btn btn-primary" onClick={this.handleIncrement}>
                    Increment
</button>
            </div>
        )
    }


}





export default Score;