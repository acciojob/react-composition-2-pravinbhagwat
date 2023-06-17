import React, { useRef } from "react";

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleCloseModal} ref={modalRef}>
      <div className="modal-dialog" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;