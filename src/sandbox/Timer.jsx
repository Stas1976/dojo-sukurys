import React, { Component } from "react";

class Timer extends Component {
  interval;

  state = {
    timer: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Timer - {this.state.timer}</h3>
        <button onClick={() => clearInterval(this.interval)}>
          Clear interval
        </button>
      </div>
    );
  }
}

export default Timer;
