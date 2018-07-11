React Create Modal
======================

React Component to show a Modal Box [See demo](https://pedrohidalgo.github.io/react-create-modal)

## Installation

The package can be installed via NPM:

```
npm install react-create-modal --save
```

Inspired by W3Schools [Modal Box sample](https://www.w3schools.com/howto/howto_css_modals.asp)

*Sample Usage:*

```javascript
import React, { PureComponent } from 'react';
import Modal from 'react-create-modal';

class SomeComponent extends PureComponent {
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

export default SomeComponent;

```