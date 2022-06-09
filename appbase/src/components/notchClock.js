import React from "react";

class NotchClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notchClock: "",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ notchClock: (this.state.notchClock += "I") });
  }

  render() {
    return this.state.notchClock;
  }
}

export default NotchClock;
