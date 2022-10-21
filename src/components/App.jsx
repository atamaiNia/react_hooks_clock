import { Component } from 'react';
import Clock from './Clock';
import Modal from './Modal';
import { OpenModalBtn } from './App.styled';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    console.log(this.state.showModal);
  };
  render() {
    const { showModal } = this.state;
    const { toggleModal } = this;
    return (
      <div>
        <OpenModalBtn type="button" onClick={toggleModal}>
          Open Modal
        </OpenModalBtn>
        {showModal && (
          <Modal onClose={toggleModal}>
            <Clock />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
