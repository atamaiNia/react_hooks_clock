import { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default App;
