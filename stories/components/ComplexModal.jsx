import React, { PureComponent } from 'react';
import Modal from '../../src/Modal';

class ComplexModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    let footerAndHeaderStyle = {
      padding: '0px',
      color: 'white',
      backgroundColor: 'red'
    };

    return (
      <div>
        <button onClick={() => this.onOpen()}>Open Complex Modal</button>
        <Modal
          onClose={() => this.onClose()}
          isOpen={this.state.isOpen}
          backgroundColor="pink"
        >
          <div style={{ backgroundColor: 'grey' }}>
            <header style={footerAndHeaderStyle}>
              <h2>Modal Header</h2>
            </header>
            <div>
              <p>Hello World!</p>
              <p>Modals are awesome!</p>
            </div>
            <footer style={footerAndHeaderStyle}>
              <p>Modal Footer</p>
            </footer>
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

export default ComplexModal;
