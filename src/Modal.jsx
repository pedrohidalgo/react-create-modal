import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
  const displayValue = isOpen ? 'block' : 'none';

  return (
    <div className="modal" style={{ display: displayValue }}>
      <div className="modal-content">
        <span className="close" onClick={() => onClose()}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
