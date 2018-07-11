import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, isOpen, onClose, backgroundColor }) => {
  const displayValue = isOpen ? 'block' : 'none';

  return (
    <div className="modal" style={{ display: displayValue }}>
      <div className="modal-content" style={{ backgroundColor }}>
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
  onClose: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string
};

Modal.defaultProps = {
  backgroundColor: 'white'
};

export default Modal;
