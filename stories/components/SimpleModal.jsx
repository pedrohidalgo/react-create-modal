import React, { PureComponent } from 'react';
import Modal from '../../src/Modal';

class SimpleModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onOpen()}>Open Modal</button>
        <Modal onClose={() => this.onClose()} isOpen={this.state.isOpen}>
          <div>
            <h4>Hello World</h4>
            <p>a paragraph</p>
          </div>
        </Modal>
      </div>
    );
  }

  onOpen() {
    this.setState({ isOpen: true });
  }

  onClose() {
    this.setState({ isOpen: false });
  }
}

export default SimpleModal;
