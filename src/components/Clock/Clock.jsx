import { Component } from 'react';
import { ClockContainer } from './Clock.styled';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <ClockContainer className="Clock__face">{this.state.time}</ClockContainer>
    );
  }
}
